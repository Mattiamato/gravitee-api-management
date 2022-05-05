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
package io.gravitee.rest.api.service.impl.upgrade;

import io.gravitee.repository.exceptions.TechnicalException;
import io.gravitee.repository.management.api.OrganizationRepository;
import io.gravitee.rest.api.model.permissions.OrganizationPermission;
import io.gravitee.rest.api.model.permissions.RoleScope;
import io.gravitee.rest.api.model.permissions.SystemRole;
import io.gravitee.rest.api.service.InstallationService;
import io.gravitee.rest.api.service.RoleService;
import io.gravitee.rest.api.service.common.ExecutionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * @author GraviteeSource Team
 */
@Component
public class AuditDefaultOrganizationAdminRoleUpgrader extends OneShotUpgrader {

    private final RoleService roleService;

    private final OrganizationRepository organizationRepository;

    @Autowired
    public AuditDefaultOrganizationAdminRoleUpgrader(RoleService roleService, OrganizationRepository organizationRepository) {
        super(InstallationService.AUDIT_DEFAULT_ORGANIZATION_ADMIN_ROLE_UPGRADER_STATUS);
        this.roleService = roleService;
        this.organizationRepository = organizationRepository;
    }

    @Override
    protected void processOneShotUpgrade() throws TechnicalException {
        organizationRepository
            .findAll()
            .forEach(
                organization -> {
                    ExecutionContext executionContext = new ExecutionContext(organization);
                    roleService.createOrUpdateSystemRole(
                        executionContext,
                        SystemRole.ADMIN,
                        RoleScope.ORGANIZATION,
                        OrganizationPermission.values(),
                        organization.getId()
                    );
                }
            );
    }

    @Override
    public int getOrder() {
        return 150;
    }
}
