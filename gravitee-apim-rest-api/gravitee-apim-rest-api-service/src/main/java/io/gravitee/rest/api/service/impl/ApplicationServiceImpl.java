/**
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package io.gravitee.rest.api.service.impl;

import static io.gravitee.repository.management.model.Application.AuditEvent.*;
import static java.util.Collections.emptySet;
import static java.util.Collections.singletonList;
import static java.util.stream.Collectors.toList;
import static java.util.stream.Collectors.toSet;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.gravitee.common.data.domain.Page;
import io.gravitee.repository.exceptions.TechnicalException;
import io.gravitee.repository.management.api.ApplicationRepository;
import io.gravitee.repository.management.api.search.ApplicationCriteria;
import io.gravitee.repository.management.model.*;
import io.gravitee.rest.api.model.*;
import io.gravitee.rest.api.model.ApiKeyMode;
import io.gravitee.rest.api.model.MembershipMemberType;
import io.gravitee.rest.api.model.MembershipReferenceType;
import io.gravitee.rest.api.model.application.ApplicationListItem;
import io.gravitee.rest.api.model.application.ApplicationSettings;
import io.gravitee.rest.api.model.application.OAuthClientSettings;
import io.gravitee.rest.api.model.application.SimpleApplicationSettings;
import io.gravitee.rest.api.model.common.Sortable;
import io.gravitee.rest.api.model.configuration.application.ApplicationGrantTypeEntity;
import io.gravitee.rest.api.model.configuration.application.ApplicationTypeEntity;
import io.gravitee.rest.api.model.configuration.application.registration.ClientRegistrationProviderEntity;
import io.gravitee.rest.api.model.notification.GenericNotificationConfigEntity;
import io.gravitee.rest.api.model.parameters.Key;
import io.gravitee.rest.api.model.parameters.ParameterReferenceType;
import io.gravitee.rest.api.model.permissions.RoleScope;
import io.gravitee.rest.api.model.permissions.SystemRole;
import io.gravitee.rest.api.model.subscription.SubscriptionQuery;
import io.gravitee.rest.api.service.*;
import io.gravitee.rest.api.service.common.ExecutionContext;
import io.gravitee.rest.api.service.common.UuidString;
import io.gravitee.rest.api.service.configuration.application.ApplicationTypeService;
import io.gravitee.rest.api.service.configuration.application.ClientRegistrationService;
import io.gravitee.rest.api.service.converter.ApplicationConverter;
import io.gravitee.rest.api.service.exceptions.*;
import io.gravitee.rest.api.service.impl.configuration.application.registration.client.register.ClientRegistrationResponse;
import io.gravitee.rest.api.service.notification.ApplicationHook;
import io.gravitee.rest.api.service.notification.HookScope;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;
import javax.xml.bind.DatatypeConverter;
import org.jetbrains.annotations.NotNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * @author David BRASSELY (david.brassely at graviteesource.com)
 * @author Nicolas GERAUD (nicolas.geraud at graviteesource.com)
 * @author GraviteeSource Team
 */
@Component
public class ApplicationServiceImpl extends AbstractService implements ApplicationService {

    private final Logger LOGGER = LoggerFactory.getLogger(ApplicationServiceImpl.class);

    @Autowired
    private ApplicationRepository applicationRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private MembershipService membershipService;

    @Autowired
    private RoleService roleService;

    @Autowired
    private GroupService groupService;

    @Autowired
    private SubscriptionService subscriptionService;

    @Autowired
    private ApiKeyService apiKeyService;

    @Autowired
    private AuditService auditService;

    @Autowired
    private GenericNotificationConfigService genericNotificationConfigService;

    @Autowired
    private PortalNotificationConfigService portalNotificationConfigService;

    @Autowired
    private ClientRegistrationService clientRegistrationService;

    @Autowired
    private ParameterService parameterService;

    @Autowired
    private ApplicationTypeService applicationTypeService;

    @Autowired
    private EnvironmentService environmentService;

    @Autowired
    private ApplicationAlertService applicationAlertService;

    @Autowired
    private ApplicationConverter applicationConverter;

    private final ObjectMapper mapper = new ObjectMapper();

    @Override
    public ApplicationEntity findById(final ExecutionContext executionContext, String applicationId) {
        try {
            LOGGER.debug("Find application by ID: {}", applicationId);

            Optional<Application> applicationOptional = applicationRepository.findById(applicationId);

            if (executionContext.hasEnvironmentId()) {
                applicationOptional =
                    applicationOptional.filter(result -> result.getEnvironmentId().equals(executionContext.getEnvironmentId()));
            }

            if (applicationOptional.isPresent()) {
                return convertAndFillPrimaryOwner(executionContext, applicationOptional.get());
            }

            throw new ApplicationNotFoundException(applicationId);
        } catch (TechnicalException ex) {
            LOGGER.error("An error occurs while trying to find an application using its ID {}", applicationId, ex);
            throw new TechnicalManagementException("An error occurs while trying to find an application using its ID " + applicationId, ex);
        }
    }

    @Override
    public Set<ApplicationListItem> findByIds(final ExecutionContext executionContext, Collection<String> applicationIds) {
        try {
            LOGGER.debug("Find application by IDs: {}", applicationIds);

            final Set<Application> applications = applicationRepository
                .findByIds(applicationIds)
                .stream()
                .filter(app -> ApplicationStatus.ACTIVE.equals(app.getStatus()))
                .filter(app -> app.getEnvironmentId().equals(executionContext.getEnvironmentId()))
                .collect(Collectors.toCollection(LinkedHashSet::new));

            if (applications.isEmpty()) {
                return emptySet();
            }

            return this.convertToList(executionContext, applications);
        } catch (TechnicalException ex) {
            LOGGER.error("An error occurs while trying to find applications by ids {}", applicationIds, ex);
            throw new TechnicalManagementException("An error occurs while trying to find applications by ids {}" + applicationIds, ex);
        }
    }

    @Override
    public Set<ApplicationListItem> findByUser(final ExecutionContext executionContext, String username, Sortable sortable) {
        try {
            LOGGER.debug("Find applications for user {}", username);

            Set<String> userApplicationsIds = findUserApplicationsIds(executionContext, username, executionContext.getOrganizationId());

            Set<Application> byIds = applicationRepository.findByIds(new ArrayList<>(userApplicationsIds), convert(sortable));

            final Set<Application> applications = byIds
                .stream()
                .filter(app -> ApplicationStatus.ACTIVE.equals(app.getStatus()))
                .filter(app -> app.getEnvironmentId().equals(executionContext.getEnvironmentId()))
                .collect(Collectors.toCollection(LinkedHashSet::new));

            if (applications.isEmpty()) {
                return emptySet();
            }

            return this.convertToList(executionContext, applications);
        } catch (TechnicalException ex) {
            LOGGER.error("An error occurs while trying to find applications for user {}", username, ex);
            throw new TechnicalManagementException("An error occurs while trying to find applications for user " + username, ex);
        }
    }

    @Override
    public Set<ApplicationListItem> findByUserAndNameAndStatus(
        final ExecutionContext executionContext,
        String userName,
        boolean isAdminUser,
        String name,
        String status
    ) {
        LOGGER.debug("Find applications by user {} and name {}, with isAdminUser {})", userName, name, isAdminUser);
        if (name == null || name.trim().isEmpty()) {
            return emptySet();
        }

        Set<String> userApplicationsIds = emptySet();
        if (!isAdminUser) {
            userApplicationsIds = findUserApplicationsIds(executionContext, userName, executionContext.getOrganizationId());
            if (userApplicationsIds.isEmpty()) {
                return emptySet();
            }
        }

        return searchApplicationsByNameAndStatusAndIds(executionContext, name, status, userApplicationsIds.toArray(new String[0]));
    }

    @Override
    public Set<ApplicationListItem> findByOrganization(String organizationId) {
        LOGGER.debug("Find applications by organization {} ", organizationId);
        try {
            if (organizationId == null || organizationId.trim().isEmpty()) {
                return emptySet();
            }

            final List<String> environmentIds = environmentService
                .findByOrganization(organizationId)
                .stream()
                .map(EnvironmentEntity::getId)
                .collect(toList());
            ApplicationCriteria criteria = new ApplicationCriteria.Builder().environmentIds(environmentIds).build();

            Page<Application> applications = applicationRepository.search(criteria, null);
            return convertToSimpleList(new HashSet<>(applications.getContent()));
        } catch (TechnicalException ex) {
            LOGGER.error("An error occurs while trying to find applications for organization {}", organizationId, ex);
            throw new TechnicalManagementException(
                "An error occurs while trying to find applications for organization {}" + organizationId,
                ex
            );
        }
    }

    @Override
    public Set<ApplicationListItem> findByGroups(final ExecutionContext executionContext, List<String> groupIds) {
        return this.findByGroupsAndStatus(executionContext, groupIds, ApplicationStatus.ACTIVE.name());
    }

    @Override
    public Set<ApplicationListItem> findByGroupsAndStatus(final ExecutionContext executionContext, List<String> groupIds, String status) {
        LOGGER.debug("Find applications by groups {}", groupIds);
        try {
            ApplicationStatus requestedStatus = ApplicationStatus.valueOf(status.toUpperCase());
            Set<Application> applications = applicationRepository.findByGroups(groupIds, ApplicationStatus.valueOf(status.toUpperCase()));

            return ApplicationStatus.ACTIVE.equals(requestedStatus)
                ? convertToList(executionContext, applications)
                : convertToSimpleList(applications);
        } catch (TechnicalException ex) {
            LOGGER.error("An error occurs while trying to find applications for groups {}", groupIds, ex);
            throw new TechnicalManagementException("An error occurs while trying to find applications for groups " + groupIds, ex);
        }
    }

    @Override
    public Set<ApplicationListItem> findAll(final ExecutionContext executionContext) {
        try {
            LOGGER.debug("Find all applications");

            final Set<Application> applications = applicationRepository.findAllByEnvironment(
                executionContext.getEnvironmentId(),
                ApplicationStatus.ACTIVE
            );

            if (applications == null || applications.isEmpty()) {
                return emptySet();
            }

            return this.convertToList(executionContext, applications);
        } catch (TechnicalException ex) {
            LOGGER.error("An error occurs while trying to find all applications", ex);
            throw new TechnicalManagementException("An error occurs while trying to find all applications", ex);
        }
    }

    @Override
    public Set<ApplicationListItem> findByStatus(final ExecutionContext executionContext, String status) {
        try {
            LOGGER.debug("Find all applications");

            ApplicationStatus requestedStatus = ApplicationStatus.valueOf(status.toUpperCase());
            final Set<Application> applications = applicationRepository.findAllByEnvironment(
                executionContext.getEnvironmentId(),
                requestedStatus
            );

            if (applications == null || applications.isEmpty()) {
                return emptySet();
            }

            return ApplicationStatus.ACTIVE.equals(requestedStatus)
                ? convertToList(executionContext, applications)
                : convertToSimpleList(applications);
        } catch (TechnicalException ex) {
            LOGGER.error("An error occurs while trying to find all applications", ex);
            throw new TechnicalManagementException("An error occurs while trying to find all applications", ex);
        }
    }

    @Override
    public ApplicationEntity create(final ExecutionContext executionContext, NewApplicationEntity newApplicationEntity, String userId) {
        LOGGER.debug("Create {} for user {}", newApplicationEntity, userId);

        // Check that only one settings is defined
        if (newApplicationEntity.getSettings().getApp() != null && newApplicationEntity.getSettings().getoAuthClient() != null) {
            throw new InvalidApplicationTypeException();
        }

        // Check that a type is defined
        if (newApplicationEntity.getSettings().getApp() == null && newApplicationEntity.getSettings().getoAuthClient() == null) {
            throw new InvalidApplicationTypeException();
        }

        // Check that shared API key mode is enabled
        if (
            newApplicationEntity.getApiKeyMode() == ApiKeyMode.SHARED &&
            !parameterService.findAsBoolean(executionContext, Key.PLAN_SECURITY_APIKEY_SHARED_ALLOWED, ParameterReferenceType.ENVIRONMENT)
        ) {
            throw new InvalidApplicationApiKeyModeException(
                "Can't create application with SHARED api key mode cause environment setting is disabled"
            );
        }

        // Create application metadata
        Map<String, String> metadata = new HashMap<>();

        // Create a simple "internal" application
        if (newApplicationEntity.getSettings().getApp() != null) {
            // If client registration is enabled, check that the simple type is allowed
            if (
                isClientRegistrationEnabled(executionContext, executionContext.getEnvironmentId()) &&
                !isApplicationTypeAllowed(executionContext, "simple", executionContext.getEnvironmentId())
            ) {
                throw new IllegalStateException("Application type 'simple' is not allowed");
            }

            // If clientId is set, check for uniqueness
            String clientId = newApplicationEntity.getSettings().getApp().getClientId();

            if (clientId != null && !clientId.trim().isEmpty()) {
                LOGGER.debug("Check that client_id is unique among all applications");
                try {
                    final Set<Application> applications = applicationRepository.findAllByEnvironment(
                        executionContext.getEnvironmentId(),
                        ApplicationStatus.ACTIVE
                    );
                    final boolean alreadyExistingApp = applications
                        .stream()
                        .anyMatch(app -> app.getMetadata() != null && clientId.equals(app.getMetadata().get("client_id")));
                    if (alreadyExistingApp) {
                        LOGGER.error("An application already exists with the same client_id");
                        throw new ClientIdAlreadyExistsException(clientId);
                    }
                } catch (TechnicalException ex) {
                    LOGGER.error("An error occurs while trying to create {} for user {}", newApplicationEntity, userId, ex);
                    throw new TechnicalManagementException(
                        "An error occurs while trying create " + newApplicationEntity + " for user " + userId,
                        ex
                    );
                }
            }
        } else {
            // Check that client registration is enabled
            checkClientRegistrationEnabled(executionContext, executionContext.getEnvironmentId());

            String appType = newApplicationEntity.getSettings().getoAuthClient().getApplicationType();
            // Check that the application_type is allowed
            if (!isApplicationTypeAllowed(executionContext, appType, executionContext.getEnvironmentId())) {
                throw new IllegalStateException("Application type '" + appType + "' is not allowed");
            }
            checkClientSettings(newApplicationEntity.getSettings().getoAuthClient());

            // Create an OAuth client
            ClientRegistrationResponse registrationResponse = clientRegistrationService.register(newApplicationEntity);
            try {
                metadata.put("client_id", registrationResponse.getClientId());
                metadata.put("registration_payload", mapper.writeValueAsString(registrationResponse));
            } catch (JsonProcessingException e) {
                e.printStackTrace();
            }
        }

        if (newApplicationEntity.getGroups() != null && !newApplicationEntity.getGroups().isEmpty()) {
            //throw a NotFoundException if the group doesn't exist
            groupService.findByIds(newApplicationEntity.getGroups());
        }

        Application application = applicationConverter.toApplication(newApplicationEntity);
        application.setId(UuidString.generateRandom());
        application.setStatus(ApplicationStatus.ACTIVE);
        metadata.forEach((key, value) -> application.getMetadata().put(key, value));

        // Add Default groups
        Set<String> defaultGroups = groupService
            .findByEvent(executionContext.getEnvironmentId(), GroupEvent.APPLICATION_CREATE)
            .stream()
            .map(GroupEntity::getId)
            .collect(toSet());
        if (!defaultGroups.isEmpty() && application.getGroups() == null) {
            application.setGroups(defaultGroups);
        } else if (!defaultGroups.isEmpty()) {
            application.getGroups().addAll(defaultGroups);
        }

        // Set date fields
        application.setCreatedAt(new Date());
        application.setUpdatedAt(application.getCreatedAt());

        return createApplicationForEnvironment(executionContext, userId, application);
    }

    @NotNull
    private ApplicationEntity createApplicationForEnvironment(
        final ExecutionContext executionContext,
        String userId,
        Application application
    ) {
        try {
            application.setEnvironmentId(executionContext.getEnvironmentId());

            Application createdApplication = applicationRepository.create(application);

            // Audit
            auditService.createApplicationAuditLog(
                executionContext,
                createdApplication.getId(),
                Collections.emptyMap(),
                APPLICATION_CREATED,
                createdApplication.getCreatedAt(),
                null,
                createdApplication
            );

            // Add the primary owner of the newly created Application
            membershipService.addRoleToMemberOnReference(
                executionContext,
                new MembershipService.MembershipReference(MembershipReferenceType.APPLICATION, createdApplication.getId()),
                new MembershipService.MembershipMember(userId, null, MembershipMemberType.USER),
                new MembershipService.MembershipRole(RoleScope.APPLICATION, SystemRole.PRIMARY_OWNER.name())
            );

            // create the default mail notification
            UserEntity userEntity = userService.findById(executionContext, userId);
            if (userEntity.getEmail() != null && !userEntity.getEmail().isEmpty()) {
                GenericNotificationConfigEntity notificationConfigEntity = new GenericNotificationConfigEntity();
                notificationConfigEntity.setName("Default Mail Notifications");
                notificationConfigEntity.setReferenceType(HookScope.APPLICATION.name());
                notificationConfigEntity.setReferenceId(createdApplication.getId());
                notificationConfigEntity.setHooks(Arrays.stream(ApplicationHook.values()).map(Enum::name).collect(toList()));
                notificationConfigEntity.setNotifier(NotifierServiceImpl.DEFAULT_EMAIL_NOTIFIER_ID);
                notificationConfigEntity.setConfig(userEntity.getEmail());
                genericNotificationConfigService.create(notificationConfigEntity);
            }
            return convert(createdApplication, userEntity);
        } catch (TechnicalException ex) {
            LOGGER.error(
                "An error occurs while trying to create {} for user {} in environment {}",
                application,
                userId,
                executionContext.getEnvironmentId(),
                ex
            );
            throw new TechnicalManagementException(
                "An error occurs while trying create " +
                application +
                " for user " +
                userId +
                " in environment " +
                executionContext.getEnvironmentId(),
                ex
            );
        }
    }

    private void checkClientSettings(OAuthClientSettings oAuthClientSettings) {
        if (oAuthClientSettings.getGrantTypes() == null || oAuthClientSettings.getGrantTypes().isEmpty()) {
            throw new ApplicationGrantTypesNotFoundException();
        }

        ApplicationTypeEntity applicationType = applicationTypeService.getApplicationType(oAuthClientSettings.getApplicationType());

        List<String> targetGrantTypes = oAuthClientSettings.getGrantTypes();
        List<String> allowedGrantTypes = applicationType
            .getAllowed_grant_types()
            .stream()
            .map(ApplicationGrantTypeEntity::getType)
            .collect(toList());
        if (!allowedGrantTypes.containsAll(targetGrantTypes)) {
            throw new ApplicationGrantTypesNotAllowedException(oAuthClientSettings.getApplicationType(), targetGrantTypes);
        }

        List<String> redirectUris = oAuthClientSettings.getRedirectUris();
        if (applicationType.getRequires_redirect_uris() && (redirectUris == null || redirectUris.isEmpty())) {
            throw new ApplicationRedirectUrisNotFound();
        }

        List<String> responseTypes = applicationType
            .getAllowed_grant_types()
            .stream()
            .filter(applicationGrantTypeEntity -> targetGrantTypes.contains(applicationGrantTypeEntity.getType()))
            .map(ApplicationGrantTypeEntity::getResponse_types)
            .flatMap(Collection::stream)
            .distinct()
            .collect(toList());

        oAuthClientSettings.setResponseTypes(responseTypes);
    }

    @Override
    public ApplicationEntity update(
        final ExecutionContext executionContext,
        String applicationId,
        UpdateApplicationEntity updateApplicationEntity
    ) {
        try {
            LOGGER.debug("Update application {}", applicationId);
            if (updateApplicationEntity.getGroups() != null && !updateApplicationEntity.getGroups().isEmpty()) {
                //throw a NotFoundException if the group doesn't exist
                groupService.findByIds(updateApplicationEntity.getGroups());
            }

            Application applicationToUpdate = applicationRepository
                .findById(applicationId)
                .orElseThrow(() -> new ApplicationNotFoundException(applicationId));

            if (ApplicationStatus.ARCHIVED.equals(applicationToUpdate.getStatus())) {
                throw new ApplicationArchivedException(applicationToUpdate.getName());
            }

            // Check that only one settings is defined
            if (updateApplicationEntity.getSettings().getApp() != null && updateApplicationEntity.getSettings().getoAuthClient() != null) {
                throw new InvalidApplicationTypeException();
            }

            // Check that a type is defined
            if (updateApplicationEntity.getSettings().getApp() == null && updateApplicationEntity.getSettings().getoAuthClient() == null) {
                throw new InvalidApplicationTypeException();
            }

            // Check that application Api Key mode is valid
            checkApiKeyModeUpdate(executionContext, updateApplicationEntity, applicationToUpdate);

            // Update application metadata
            Map<String, String> metadata = new HashMap<>();

            // Update a simple application
            if (applicationToUpdate.getType() == ApplicationType.SIMPLE && updateApplicationEntity.getSettings().getApp() != null) {
                // If clientId is set, check for uniqueness
                String clientId = updateApplicationEntity.getSettings().getApp().getClientId();

                if (clientId != null && !clientId.trim().isEmpty()) {
                    LOGGER.debug("Check that client_id is unique among all applications");
                    final Set<Application> applications = applicationRepository.findAllByEnvironment(
                        executionContext.getEnvironmentId(),
                        ApplicationStatus.ACTIVE
                    );
                    final Optional<Application> byClientId = applications
                        .stream()
                        .filter(app -> app.getMetadata() != null && clientId.equals(app.getMetadata().get("client_id")))
                        .findAny();
                    if (byClientId.isPresent() && !byClientId.get().getId().equals(applicationToUpdate.getId())) {
                        LOGGER.error("An application already exists with the same client_id");
                        throw new ClientIdAlreadyExistsException(clientId);
                    }
                }
            } else {
                // Check that client registration is enabled
                checkClientRegistrationEnabled(executionContext, executionContext.getEnvironmentId());
                checkClientSettings(updateApplicationEntity.getSettings().getoAuthClient());

                // Update an OAuth client
                final String registrationPayload = applicationToUpdate.getMetadata().get("registration_payload");
                if (registrationPayload != null) {
                    ClientRegistrationResponse registrationResponse = clientRegistrationService.update(
                        registrationPayload,
                        updateApplicationEntity
                    );
                    if (registrationResponse != null) {
                        try {
                            metadata.put("client_id", registrationResponse.getClientId());
                            metadata.put("registration_payload", mapper.writeValueAsString(registrationResponse));
                        } catch (JsonProcessingException e) {
                            e.printStackTrace();
                        }
                    }
                }
            }

            Application application = applicationConverter.toApplication(updateApplicationEntity);
            application.setId(applicationId);
            application.setEnvironmentId(applicationToUpdate.getEnvironmentId());
            application.setStatus(ApplicationStatus.ACTIVE);
            application.setType(applicationToUpdate.getType());
            application.setCreatedAt(applicationToUpdate.getCreatedAt());
            application.setUpdatedAt(new Date());

            metadata.forEach((key, value) -> application.getMetadata().put(key, value));

            Application updatedApplication = applicationRepository.update(application);

            // Audit
            auditService.createApplicationAuditLog(
                executionContext,
                updatedApplication.getId(),
                Collections.emptyMap(),
                APPLICATION_UPDATED,
                updatedApplication.getUpdatedAt(),
                applicationToUpdate,
                updatedApplication
            );

            // Set correct client_id for all subscriptions
            SubscriptionQuery subQuery = new SubscriptionQuery();
            subQuery.setApplication(applicationId);
            subQuery.setStatuses(Collections.singleton(SubscriptionStatus.ACCEPTED));
            subscriptionService
                .search(executionContext, subQuery)
                .forEach(
                    subscriptionEntity -> {
                        UpdateSubscriptionEntity updateSubscriptionEntity = new UpdateSubscriptionEntity();
                        updateSubscriptionEntity.setId(subscriptionEntity.getId());
                        updateSubscriptionEntity.setStartingAt(subscriptionEntity.getStartingAt());
                        updateSubscriptionEntity.setEndingAt(subscriptionEntity.getEndingAt());

                        subscriptionService.update(executionContext, updateSubscriptionEntity, application.getMetadata().get("client_id"));
                    }
                );
            return convert(executionContext, Collections.singleton(updatedApplication)).iterator().next();
        } catch (TechnicalException ex) {
            LOGGER.error("An error occurs while trying to update application {}", applicationId, ex);
            throw new TechnicalManagementException(
                String.format("An error occurs while trying to update application %s", applicationId),
                ex
            );
        }
    }

    @Override
    public ApplicationEntity renewClientSecret(final ExecutionContext executionContext, String applicationId) {
        try {
            LOGGER.debug("Renew client secret for application {}", applicationId);

            Application applicationToUpdate = applicationRepository
                .findById(applicationId)
                .orElseThrow(() -> new ApplicationNotFoundException(applicationId));

            if (ApplicationStatus.ARCHIVED.equals(applicationToUpdate.getStatus())) {
                throw new ApplicationArchivedException(applicationToUpdate.getName());
            }

            // Check that client registration is enabled
            checkClientRegistrationEnabled(executionContext, executionContext.getEnvironmentId());

            Application application = applicationToUpdate;
            ApplicationEntity applicationEntity = findById(executionContext, applicationId);

            // Check that the application can be updated with a new client secret
            if (
                applicationEntity.getSettings().getoAuthClient() != null &&
                applicationEntity.getSettings().getoAuthClient().isRenewClientSecretSupported()
            ) {
                ClientRegistrationResponse registrationResponse = clientRegistrationService.renewClientSecret(
                    application.getMetadata().get("registration_payload")
                );

                // Update application metadata
                Map<String, String> metadata = new HashMap<>();

                try {
                    metadata.put("client_id", registrationResponse.getClientId());
                    metadata.put("registration_payload", mapper.writeValueAsString(registrationResponse));
                } catch (JsonProcessingException e) {
                    e.printStackTrace();
                }

                application.setUpdatedAt(new Date());

                metadata.forEach((key, value) -> application.getMetadata().put(key, value));

                Application updatedApplication = applicationRepository.update(application);

                // Audit
                auditService.createApplicationAuditLog(
                    executionContext,
                    updatedApplication.getId(),
                    Collections.emptyMap(),
                    APPLICATION_UPDATED,
                    updatedApplication.getUpdatedAt(),
                    applicationToUpdate,
                    updatedApplication
                );

                return convert(executionContext, Collections.singleton(updatedApplication)).iterator().next();
            }

            throw new ApplicationRenewClientSecretException(application.getName());
        } catch (TechnicalException ex) {
            LOGGER.error("An error occurs while trying to renew client secret {}", applicationId, ex);
            throw new TechnicalManagementException(
                String.format("An error occurs while trying to renew client secret %s", applicationId),
                ex
            );
        }
    }

    @Override
    public ApplicationEntity restore(final ExecutionContext executionContext, String applicationId) {
        try {
            LOGGER.debug("Restore application {}", applicationId);

            Application application = applicationRepository
                .findById(applicationId)
                .orElseThrow(() -> new ApplicationNotFoundException(applicationId));

            if (!ApplicationStatus.ARCHIVED.equals(application.getStatus())) {
                throw new ApplicationActiveException(application.getName());
            }

            application.setStatus(ApplicationStatus.ACTIVE);
            application.setUpdatedAt(new Date());

            String userId = getAuthenticatedUsername();
            membershipService.deleteReference(executionContext, MembershipReferenceType.APPLICATION, applicationId);
            // Add the primary owner of the newly created Application
            membershipService.addRoleToMemberOnReference(
                executionContext,
                new MembershipService.MembershipReference(MembershipReferenceType.APPLICATION, applicationId),
                new MembershipService.MembershipMember(userId, null, MembershipMemberType.USER),
                new MembershipService.MembershipRole(RoleScope.APPLICATION, SystemRole.PRIMARY_OWNER.name())
            );

            // delete notifications
            genericNotificationConfigService.deleteReference(NotificationReferenceType.APPLICATION, applicationId);
            portalNotificationConfigService.deleteReference(NotificationReferenceType.APPLICATION, applicationId);

            Application restoredApplication = applicationRepository.update(application);

            Collection<SubscriptionEntity> subscriptions = subscriptionService.findByApplicationAndPlan(
                executionContext,
                applicationId,
                null
            );

            subscriptions.forEach(
                subscription -> {
                    try {
                        subscriptionService.restore(executionContext, subscription.getId());
                    } catch (SubscriptionNotPausedException snce) {
                        // Subscription can not be closed because it is already closed or not yet accepted
                        LOGGER.debug("The subscription can not be closed: {}", snce.getMessage());
                    }
                }
            );

            UserEntity userEntity = userService.findById(executionContext, userId);

            // Audit
            auditService.createApplicationAuditLog(
                executionContext,
                restoredApplication.getId(),
                Collections.emptyMap(),
                APPLICATION_RESTORED,
                restoredApplication.getUpdatedAt(),
                application,
                restoredApplication
            );

            return convert(restoredApplication, userEntity);
        } catch (TechnicalException ex) {
            LOGGER.error("An error occurs while trying to restore {}", applicationId, ex);
            throw new TechnicalManagementException(String.format("An error occurs while trying to restore %s", applicationId), ex);
        }
    }

    private void checkClientRegistrationEnabled(ExecutionContext executionContext, String environmentId) {
        if (!isClientRegistrationEnabled(executionContext, environmentId)) {
            throw new IllegalStateException("The client registration is disabled");
        }
    }

    private boolean isClientRegistrationEnabled(ExecutionContext executionContext, String environmentId) {
        return parameterService.findAsBoolean(
            executionContext,
            Key.APPLICATION_REGISTRATION_ENABLED,
            environmentId,
            ParameterReferenceType.ENVIRONMENT
        );
    }

    private boolean isApplicationTypeAllowed(ExecutionContext executionContext, String applicationType, String environmentId) {
        Key key = Key.valueOf("APPLICATION_TYPE_" + applicationType.toUpperCase() + "_ENABLED");
        return parameterService.findAsBoolean(executionContext, key, environmentId, ParameterReferenceType.ENVIRONMENT);
    }

    @Override
    public void archive(final ExecutionContext executionContext, String applicationId) {
        try {
            LOGGER.debug("Delete application {}", applicationId);

            Application application = applicationRepository
                .findById(applicationId)
                .orElseThrow(() -> new ApplicationNotFoundException(applicationId));
            Application previousApplication = new Application(application);
            Collection<SubscriptionEntity> subscriptions = subscriptionService.findByApplicationAndPlan(
                executionContext,
                applicationId,
                null
            );

            subscriptions.forEach(
                subscription -> {
                    List<ApiKeyEntity> apiKeys = apiKeyService.findBySubscription(executionContext, subscription.getId());
                    apiKeys.forEach(
                        apiKey -> {
                            try {
                                apiKeyService.delete(apiKey.getKey());
                            } catch (TechnicalManagementException tme) {
                                LOGGER.error("An error occurs while deleting API Key with id {}", apiKey.getId(), tme);
                            }
                        }
                    );

                    try {
                        subscriptionService.close(executionContext, subscription.getId());
                    } catch (SubscriptionNotClosableException snce) {
                        // Subscription can not be closed because it is already closed or not yet accepted
                        LOGGER.debug("The subscription can not be closed: {}", snce.getMessage());
                    }
                }
            );

            // Archive the application
            application.setUpdatedAt(new Date());
            application.setStatus(ApplicationStatus.ARCHIVED);
            applicationRepository.update(application);
            // remove notifications
            genericNotificationConfigService.deleteReference(NotificationReferenceType.APPLICATION, applicationId);
            // delete memberships
            membershipService.deleteReference(executionContext, MembershipReferenceType.APPLICATION, applicationId);
            // delete alerts
            applicationAlertService.deleteAll(applicationId);
            // Audit
            auditService.createApplicationAuditLog(
                executionContext,
                application.getId(),
                Collections.emptyMap(),
                APPLICATION_ARCHIVED,
                application.getUpdatedAt(),
                previousApplication,
                application
            );
        } catch (TechnicalException ex) {
            LOGGER.error("An error occurs while trying to delete application {}", applicationId, ex);
            throw new TechnicalManagementException(
                String.format("An error occurs while trying to delete application %s", applicationId),
                ex
            );
        }
    }

    private Set<ApplicationEntity> convert(ExecutionContext executionContext, Set<Application> applications) throws TechnicalException {
        if (applications == null || applications.isEmpty()) {
            return Collections.emptySet();
        }
        RoleEntity primaryOwnerRole = roleService.findPrimaryOwnerRoleByOrganization(
            executionContext.getOrganizationId(),
            RoleScope.APPLICATION
        );
        if (primaryOwnerRole == null) {
            throw new RoleNotFoundException("APPLICATION_PRIMARY_OWNER");
        }

        //find primary owners usernames of each applications
        final List<String> appIds = applications.stream().map(Application::getId).collect(toList());

        Set<MembershipEntity> memberships = membershipService.getMembershipsByReferencesAndRole(
            io.gravitee.rest.api.model.MembershipReferenceType.APPLICATION,
            appIds,
            primaryOwnerRole.getId()
        );
        int poMissing = applications.size() - memberships.size();
        if (poMissing > 0) {
            Set<String> appMembershipsIds = memberships.stream().map(MembershipEntity::getReferenceId).collect(toSet());

            appIds.removeAll(appMembershipsIds);
            Optional<String> optionalApplicationsAsString = appIds.stream().reduce((a, b) -> a + " / " + b);

            String applicationsAsString = "?";
            if (optionalApplicationsAsString.isPresent()) applicationsAsString = optionalApplicationsAsString.get();
            LOGGER.error("{} applications has no identified primary owners in this list {}.", poMissing, applicationsAsString);
            throw new TechnicalManagementException(
                poMissing + " applications has no identified primary owners in this list " + applicationsAsString + "."
            );
        }

        Map<String, String> applicationToUser = new HashMap<>(memberships.size());
        memberships.forEach(membership -> applicationToUser.put(membership.getReferenceId(), membership.getMemberId()));

        Map<String, UserEntity> userIdToUserEntity = new HashMap<>(memberships.size());
        // We don't need user metadata, only global information
        userService
            .findByIds(executionContext, memberships.stream().map(MembershipEntity::getMemberId).collect(toList()), false)
            .forEach(userEntity -> userIdToUserEntity.put(userEntity.getId(), userEntity));

        return applications
            .stream()
            .map(publicApplication -> convert(publicApplication, userIdToUserEntity.get(applicationToUser.get(publicApplication.getId()))))
            .collect(Collectors.toCollection(LinkedHashSet::new));
    }

    private Set<ApplicationListItem> convertToSimpleList(Set<Application> applications) {
        return applications
            .stream()
            .map(
                application -> {
                    ApplicationListItem item = new ApplicationListItem();
                    item.setId(application.getId());
                    item.setName(application.getName());
                    item.setDescription(application.getDescription());
                    item.setDomain(application.getDomain());
                    item.setCreatedAt(application.getCreatedAt());
                    item.setUpdatedAt(application.getUpdatedAt());
                    item.setType(application.getType().name());
                    item.setStatus(application.getStatus().name());
                    item.setPicture(application.getPicture());
                    item.setBackground(application.getBackground());
                    return item;
                }
            )
            .collect(toSet());
    }

    private Set<ApplicationListItem> convertToList(final ExecutionContext executionContext, Set<Application> applications)
        throws TechnicalException {
        Set<ApplicationEntity> entities = convert(executionContext, applications);

        return entities
            .stream()
            .map(
                applicationEntity -> {
                    ApplicationListItem item = new ApplicationListItem();
                    item.setId(applicationEntity.getId());
                    item.setName(applicationEntity.getName());
                    item.setDescription(applicationEntity.getDescription());
                    item.setDomain(applicationEntity.getDomain());
                    item.setCreatedAt(applicationEntity.getCreatedAt());
                    item.setUpdatedAt(applicationEntity.getUpdatedAt());
                    item.setGroups(applicationEntity.getGroups());
                    item.setPrimaryOwner(applicationEntity.getPrimaryOwner());
                    item.setType(applicationEntity.getType());
                    item.setStatus(applicationEntity.getStatus());
                    item.setPicture(applicationEntity.getPicture());
                    item.setBackground(applicationEntity.getBackground());
                    item.setApiKeyMode(applicationEntity.getApiKeyMode());

                    final Application app = applications
                        .stream()
                        .filter(application -> application.getId().equals(applicationEntity.getId()))
                        .findFirst()
                        .get();
                    item.setSettings(getSettings(app));
                    return item;
                }
            )
            .collect(Collectors.toCollection(LinkedHashSet::new));
    }

    private ApplicationEntity convert(Application application, UserEntity primaryOwner) {
        if (primaryOwner == null) {
            // add a default unknown user
            primaryOwner = new UserEntity();
            primaryOwner.setId("0");
            primaryOwner.setFirstname("Unknown");
            primaryOwner.setLastname("User");
        }

        ApplicationEntity applicationEntity = new ApplicationEntity();

        applicationEntity.setId(application.getId());
        applicationEntity.setName(application.getName());
        applicationEntity.setDescription(application.getDescription());
        applicationEntity.setDomain(application.getDomain());
        if (application.getType() != null) {
            applicationEntity.setType(application.getType().name());
        }
        applicationEntity.setStatus(application.getStatus().toString());
        applicationEntity.setPicture(application.getPicture());
        applicationEntity.setBackground(application.getBackground());
        applicationEntity.setGroups(application.getGroups());
        applicationEntity.setCreatedAt(application.getCreatedAt());
        applicationEntity.setUpdatedAt(application.getUpdatedAt());
        applicationEntity.setPrimaryOwner(new PrimaryOwnerEntity(primaryOwner));

        applicationEntity.setSettings(getSettings(application));
        applicationEntity.setDisableMembershipNotifications(application.isDisableMembershipNotifications());
        if (application.getApiKeyMode() != null) {
            applicationEntity.setApiKeyMode(ApiKeyMode.valueOf(application.getApiKeyMode().name()));
        }
        return applicationEntity;
    }

    private ApplicationSettings getSettings(Application application) {
        final ApplicationSettings settings = new ApplicationSettings();
        if (application.getType() == ApplicationType.SIMPLE) {
            SimpleApplicationSettings simpleSettings = new SimpleApplicationSettings();
            if (application.getMetadata() != null) {
                if (application.getMetadata().get("client_id") != null) {
                    simpleSettings.setClientId(application.getMetadata().get("client_id"));
                }
                if (application.getMetadata().get("type") != null) {
                    simpleSettings.setType(application.getMetadata().get("type"));
                }
            }
            settings.setApp(simpleSettings);
        } else {
            OAuthClientSettings clientSettings = new OAuthClientSettings();
            if (application.getMetadata() != null) {
                try {
                    final String registrationPayload = application.getMetadata().get("registration_payload");
                    if (registrationPayload != null) {
                        final ClientRegistrationResponse registrationResponse = mapper.readValue(
                            registrationPayload,
                            ClientRegistrationResponse.class
                        );
                        clientSettings.setClientId(registrationResponse.getClientId());
                        clientSettings.setClientSecret(registrationResponse.getClientSecret());
                        clientSettings.setClientUri(registrationResponse.getClientUri());
                        clientSettings.setApplicationType(registrationResponse.getApplicationType());
                        clientSettings.setLogoUri(registrationResponse.getLogoUri());
                        clientSettings.setResponseTypes(registrationResponse.getResponseTypes());
                        clientSettings.setRedirectUris(registrationResponse.getRedirectUris());
                        clientSettings.setGrantTypes(registrationResponse.getGrantTypes());
                    }

                    Iterator<ClientRegistrationProviderEntity> clientRegistrationProviderIte = clientRegistrationService
                        .findAll()
                        .iterator();
                    if (clientRegistrationProviderIte.hasNext()) {
                        clientSettings.setRenewClientSecretSupported(clientRegistrationProviderIte.next().isRenewClientSecretSupport());
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            settings.setoAuthClient(clientSettings);
        }
        return settings;
    }

    @Override
    public InlinePictureEntity getPicture(final ExecutionContext executionContext, String applicationId) {
        ApplicationEntity applicationEntity = findById(executionContext, applicationId);
        InlinePictureEntity imageEntity = new InlinePictureEntity();
        if (applicationEntity.getPicture() != null) {
            String[] parts = applicationEntity.getPicture().split(";", 2);
            imageEntity.setType(parts[0].split(":")[1]);
            String base64Content = applicationEntity.getPicture().split(",", 2)[1];
            imageEntity.setContent(DatatypeConverter.parseBase64Binary(base64Content));
        }
        return imageEntity;
    }

    @Override
    public InlinePictureEntity getBackground(final ExecutionContext executionContext, String applicationId) {
        ApplicationEntity applicationEntity = findById(executionContext, applicationId);
        InlinePictureEntity imageEntity = new InlinePictureEntity();
        if (applicationEntity.getBackground() != null) {
            String[] parts = applicationEntity.getBackground().split(";", 2);
            imageEntity.setType(parts[0].split(":")[1]);
            String base64Content = applicationEntity.getBackground().split(",", 2)[1];
            imageEntity.setContent(DatatypeConverter.parseBase64Binary(base64Content));
        }
        return imageEntity;
    }

    @Override
    public Map<String, Object> findByIdAsMap(String id) throws TechnicalException {
        Application application = applicationRepository.findById(id).orElseThrow(() -> new ApplicationNotFoundException(id));

        ExecutionContext executionContext = new ExecutionContext(environmentService.findById(application.getEnvironmentId()));
        ApplicationEntity applicationEntity = convertAndFillPrimaryOwner(executionContext, application);

        Map<String, Object> dataAsMap = mapper.convertValue(applicationEntity, Map.class);
        dataAsMap.remove("picture");
        return dataAsMap;
    }

    private Set<String> findUserApplicationsIds(ExecutionContext executionContext, String username, final String organizationId) {
        //find applications where the user is a member
        Set<String> appIds = membershipService
            .getMembershipsByMemberAndReference(MembershipMemberType.USER, username, MembershipReferenceType.APPLICATION)
            .stream()
            .map(MembershipEntity::getReferenceId)
            .collect(toSet());
        //find user groups
        List<String> groupIds = membershipService
            .getMembershipsByMemberAndReference(MembershipMemberType.USER, username, MembershipReferenceType.GROUP)
            .stream()
            .filter(m -> m.getRoleId() != null && roleService.findById(m.getRoleId()).getScope().equals(RoleScope.APPLICATION))
            .map(MembershipEntity::getReferenceId)
            .collect(toList());

        appIds.addAll(this.findByGroups(executionContext, groupIds).stream().map(ApplicationListItem::getId).collect(toSet()));

        return appIds;
    }

    private Set<ApplicationListItem> searchApplicationsByNameAndStatusAndIds(
        final ExecutionContext executionContext,
        String name,
        String status,
        String[] ids
    ) {
        try {
            ApplicationCriteria criteria = new ApplicationCriteria.Builder()
                .status(ApplicationStatus.valueOf(status))
                .name(name.trim())
                .environmentIds(singletonList(executionContext.getEnvironmentId()))
                .ids(ids)
                .build();
            Page<Application> applications = applicationRepository.search(criteria, null);
            return convertToList(executionContext, new HashSet<>(applications.getContent()));
        } catch (TechnicalException ex) {
            String errorMessage = String.format("An error occurs while trying to find applications by name %s and id %s", name, ids);
            LOGGER.error(errorMessage, ex);
            throw new TechnicalManagementException(errorMessage, ex);
        }
    }

    private void checkApiKeyModeUpdate(
        ExecutionContext executionContext,
        UpdateApplicationEntity updateApplicationEntity,
        Application applicationToUpdate
    ) {
        // Retro-compatibility : If input apiKey mode is not specified, get it from existing application
        if (updateApplicationEntity.getApiKeyMode() == null && applicationToUpdate.getApiKeyMode() != null) {
            updateApplicationEntity.setApiKeyMode(ApiKeyMode.valueOf(applicationToUpdate.getApiKeyMode().name()));
        } else if (
            applicationToUpdate.getApiKeyMode() != null &&
            !applicationToUpdate.getApiKeyMode().isUpdatable() &&
            !applicationToUpdate.getApiKeyMode().name().equals(updateApplicationEntity.getApiKeyMode().name())
        ) {
            throw new InvalidApplicationApiKeyModeException(
                String.format(
                    "Can't update application %s Api key mode cause current Api Key Mode %s is not updatable",
                    applicationToUpdate.getId(),
                    applicationToUpdate.getApiKeyMode()
                )
            );
        } else if (
            updateApplicationEntity.getApiKeyMode() == ApiKeyMode.SHARED &&
            applicationToUpdate.getApiKeyMode() != io.gravitee.repository.management.model.ApiKeyMode.SHARED &&
            !parameterService.findAsBoolean(executionContext, Key.PLAN_SECURITY_APIKEY_SHARED_ALLOWED, ParameterReferenceType.ENVIRONMENT)
        ) {
            throw new InvalidApplicationApiKeyModeException(
                String.format(
                    "Can't update application %s Api key mode to SHARED cause environment setting is disabled",
                    applicationToUpdate.getId()
                )
            );
        }
    }

    private ApplicationEntity convertAndFillPrimaryOwner(ExecutionContext executionContext, Application application) {
        MembershipEntity primaryOwnerMemberEntity = membershipService.getPrimaryOwner(
            executionContext.getOrganizationId(),
            MembershipReferenceType.APPLICATION,
            application.getId()
        );
        if (primaryOwnerMemberEntity == null) {
            if (!ApplicationStatus.ARCHIVED.equals(application.getStatus())) {
                LOGGER.error("The Application {} doesn't have any primary owner.", application.getId());
            }
            return convert(application, null);
        }

        return convert(application, userService.findById(executionContext, primaryOwnerMemberEntity.getMemberId()));
    }
}
