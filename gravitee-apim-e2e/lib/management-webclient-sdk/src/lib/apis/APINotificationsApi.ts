/* tslint:disable */
/* eslint-disable */
/**
 * Gravitee.io - Management API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.18.0-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    GenericNotificationConfigEntity,
    GenericNotificationConfigEntityFromJSON,
    GenericNotificationConfigEntityToJSON,
    PortalNotificationConfigEntity,
    PortalNotificationConfigEntityFromJSON,
    PortalNotificationConfigEntityToJSON,
} from '../models';

export interface CreateApiNotificationSettingsRequest {
    api: string;
    envId: string;
    orgId: string;
    genericNotificationConfigEntity?: GenericNotificationConfigEntity;
}

export interface DeleteApiNotificationSettingsRequest {
    notificationId: string;
    api: string;
    envId: string;
    orgId: string;
}

export interface GetApiNotificationSettingsRequest {
    api: string;
    envId: string;
    orgId: string;
}

export interface UpdateApiGeneralNotificationSettingsRequest {
    notificationId: string;
    api: string;
    envId: string;
    orgId: string;
    genericNotificationConfigEntity?: GenericNotificationConfigEntity;
}

export interface UpdateApiPortalNotificationSettingsRequest {
    api: string;
    envId: string;
    orgId: string;
    portalNotificationConfigEntity?: PortalNotificationConfigEntity;
}

/**
 * 
 */
export class APINotificationsApi extends runtime.BaseAPI {

    /**
     * Create notification settings
     */
    async createApiNotificationSettingsRaw(requestParameters: CreateApiNotificationSettingsRequest): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.api === null || requestParameters.api === undefined) {
            throw new runtime.RequiredError('api','Required parameter requestParameters.api was null or undefined when calling createApiNotificationSettings.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling createApiNotificationSettings.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling createApiNotificationSettings.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/apis/{api}/notificationsettings`.replace(`{${"api"}}`, encodeURIComponent(String(requestParameters.api))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GenericNotificationConfigEntityToJSON(requestParameters.genericNotificationConfigEntity),
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Create notification settings
     */
    async createApiNotificationSettings(requestParameters: CreateApiNotificationSettingsRequest): Promise<any> {
        const response = await this.createApiNotificationSettingsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete notification settings
     */
    async deleteApiNotificationSettingsRaw(requestParameters: DeleteApiNotificationSettingsRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.notificationId === null || requestParameters.notificationId === undefined) {
            throw new runtime.RequiredError('notificationId','Required parameter requestParameters.notificationId was null or undefined when calling deleteApiNotificationSettings.');
        }

        if (requestParameters.api === null || requestParameters.api === undefined) {
            throw new runtime.RequiredError('api','Required parameter requestParameters.api was null or undefined when calling deleteApiNotificationSettings.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling deleteApiNotificationSettings.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling deleteApiNotificationSettings.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/apis/{api}/notificationsettings/{notificationId}`.replace(`{${"notificationId"}}`, encodeURIComponent(String(requestParameters.notificationId))).replace(`{${"api"}}`, encodeURIComponent(String(requestParameters.api))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete notification settings
     */
    async deleteApiNotificationSettings(requestParameters: DeleteApiNotificationSettingsRequest): Promise<void> {
        await this.deleteApiNotificationSettingsRaw(requestParameters);
    }

    /**
     * Get notification settings
     */
    async getApiNotificationSettingsRaw(requestParameters: GetApiNotificationSettingsRequest): Promise<runtime.ApiResponse<Array<any>>> {
        if (requestParameters.api === null || requestParameters.api === undefined) {
            throw new runtime.RequiredError('api','Required parameter requestParameters.api was null or undefined when calling getApiNotificationSettings.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling getApiNotificationSettings.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling getApiNotificationSettings.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/apis/{api}/notificationsettings`.replace(`{${"api"}}`, encodeURIComponent(String(requestParameters.api))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get notification settings
     */
    async getApiNotificationSettings(requestParameters: GetApiNotificationSettingsRequest): Promise<Array<any>> {
        const response = await this.getApiNotificationSettingsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update generic notification settings
     */
    async updateApiGeneralNotificationSettingsRaw(requestParameters: UpdateApiGeneralNotificationSettingsRequest): Promise<runtime.ApiResponse<GenericNotificationConfigEntity>> {
        if (requestParameters.notificationId === null || requestParameters.notificationId === undefined) {
            throw new runtime.RequiredError('notificationId','Required parameter requestParameters.notificationId was null or undefined when calling updateApiGeneralNotificationSettings.');
        }

        if (requestParameters.api === null || requestParameters.api === undefined) {
            throw new runtime.RequiredError('api','Required parameter requestParameters.api was null or undefined when calling updateApiGeneralNotificationSettings.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling updateApiGeneralNotificationSettings.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling updateApiGeneralNotificationSettings.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/apis/{api}/notificationsettings/{notificationId}`.replace(`{${"notificationId"}}`, encodeURIComponent(String(requestParameters.notificationId))).replace(`{${"api"}}`, encodeURIComponent(String(requestParameters.api))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: GenericNotificationConfigEntityToJSON(requestParameters.genericNotificationConfigEntity),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GenericNotificationConfigEntityFromJSON(jsonValue));
    }

    /**
     * Update generic notification settings
     */
    async updateApiGeneralNotificationSettings(requestParameters: UpdateApiGeneralNotificationSettingsRequest): Promise<GenericNotificationConfigEntity> {
        const response = await this.updateApiGeneralNotificationSettingsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update portal notification settings
     */
    async updateApiPortalNotificationSettingsRaw(requestParameters: UpdateApiPortalNotificationSettingsRequest): Promise<runtime.ApiResponse<PortalNotificationConfigEntity>> {
        if (requestParameters.api === null || requestParameters.api === undefined) {
            throw new runtime.RequiredError('api','Required parameter requestParameters.api was null or undefined when calling updateApiPortalNotificationSettings.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling updateApiPortalNotificationSettings.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling updateApiPortalNotificationSettings.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/apis/{api}/notificationsettings`.replace(`{${"api"}}`, encodeURIComponent(String(requestParameters.api))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PortalNotificationConfigEntityToJSON(requestParameters.portalNotificationConfigEntity),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PortalNotificationConfigEntityFromJSON(jsonValue));
    }

    /**
     * Update portal notification settings
     */
    async updateApiPortalNotificationSettings(requestParameters: UpdateApiPortalNotificationSettingsRequest): Promise<PortalNotificationConfigEntity> {
        const response = await this.updateApiPortalNotificationSettingsRaw(requestParameters);
        return await response.value();
    }

}
