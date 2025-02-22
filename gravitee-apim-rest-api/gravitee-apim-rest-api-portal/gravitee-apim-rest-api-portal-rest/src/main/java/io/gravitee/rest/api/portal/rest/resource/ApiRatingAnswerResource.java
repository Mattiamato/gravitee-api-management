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
package io.gravitee.rest.api.portal.rest.resource;

import io.gravitee.common.http.MediaType;
import io.gravitee.rest.api.model.RatingEntity;
import io.gravitee.rest.api.model.api.ApiEntity;
import io.gravitee.rest.api.model.api.ApiQuery;
import io.gravitee.rest.api.model.permissions.RolePermission;
import io.gravitee.rest.api.model.permissions.RolePermissionAction;
import io.gravitee.rest.api.portal.rest.security.Permission;
import io.gravitee.rest.api.portal.rest.security.Permissions;
import io.gravitee.rest.api.service.RatingService;
import io.gravitee.rest.api.service.common.ExecutionContext;
import io.gravitee.rest.api.service.common.GraviteeContext;
import io.gravitee.rest.api.service.exceptions.ApiNotFoundException;
import io.gravitee.rest.api.service.exceptions.RatingAnswerNotFoundException;
import io.gravitee.rest.api.service.exceptions.RatingNotFoundException;
import java.util.Collection;
import java.util.Collections;
import javax.ws.rs.DELETE;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * @author Guillaume CUSNIEUX (guillaume.cusnieux at graviteesource.com)
 * @author GraviteeSource Team
 */
public class ApiRatingAnswerResource extends AbstractResource {

    @Autowired
    private RatingService ratingService;

    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    @Permissions({ @Permission(value = RolePermission.API_RATING_ANSWER, acls = RolePermissionAction.DELETE) })
    public Response deleteApiRatingAnswer(
        @PathParam("apiId") String apiId,
        @PathParam("ratingId") String ratingId,
        @PathParam("answerId") String answerId
    ) {
        final ApiQuery apiQuery = new ApiQuery();
        apiQuery.setIds(Collections.singletonList(apiId));
        final ExecutionContext executionContext = GraviteeContext.getExecutionContext();
        Collection<ApiEntity> userApis = apiService.findPublishedByUser(executionContext, getAuthenticatedUserOrNull(), apiQuery);
        if (userApis.stream().anyMatch(a -> a.getId().equals(apiId))) {
            RatingEntity ratingEntity = ratingService.findById(executionContext, ratingId);
            if (ratingEntity != null && ratingEntity.getApi().equals(apiId)) {
                if (ratingEntity.getAnswers().stream().anyMatch(answer -> answer.getId().equals(answerId))) {
                    ratingService.deleteAnswer(executionContext, ratingId, answerId);
                    return Response.status(Status.NO_CONTENT).build();
                }

                throw new RatingAnswerNotFoundException(answerId, ratingId, apiId);
            }
            throw new RatingNotFoundException(ratingId, apiId);
        }
        throw new ApiNotFoundException(apiId);
    }
}
