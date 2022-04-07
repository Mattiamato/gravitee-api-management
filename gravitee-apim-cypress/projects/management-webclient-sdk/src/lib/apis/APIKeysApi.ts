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
    ApiKeyEntity,
    ApiKeyEntityFromJSON,
    ApiKeyEntityToJSON,
} from '../models';

export interface GetApiKeysForApiSubscriptionRequest {
    subscription: string;
    api: string;
    envId: string;
    orgId: string;
}

export interface GetApiKeysForApplicationRequest {
    application: string;
    envId: string;
    orgId: string;
}

export interface GetApiKeysForApplicationSubscriptionRequest {
    subscription: string;
    application: string;
    envId: string;
    orgId: string;
}

export interface ReactivateApiKeyForApiSubscriptionRequest {
    apikey: string;
    subscription: string;
    api: string;
    envId: string;
    orgId: string;
}

export interface RenewApiKeyForApplicationSubscriptionRequest {
    application: string;
    envId: string;
    orgId: string;
}

export interface RenewApiKeyForApplicationSubscription1Request {
    subscription: string;
    application: string;
    envId: string;
    orgId: string;
}

export interface RenewSubscriptionApiKeysForApiSubscriptionRequest {
    subscription: string;
    api: string;
    envId: string;
    orgId: string;
    customApiKey?: string;
}

export interface RevokeApiKeyForApiSubscriptionRequest {
    apikey: string;
    subscription: string;
    api: string;
    envId: string;
    orgId: string;
}

export interface RevokeApiKeyForApplicationRequest {
    apikey: string;
    application: string;
    envId: string;
    orgId: string;
}

export interface RevokeApiKeyForApplicationSubscriptionRequest {
    apikey: string;
    subscription: string;
    application: string;
    envId: string;
    orgId: string;
}

export interface UpdateApiKeyForApiSubscriptionRequest {
    apikey: string;
    subscription: string;
    api: string;
    envId: string;
    orgId: string;
    apiKeyEntity: ApiKeyEntity;
}

/**
 * 
 */
export class APIKeysApi extends runtime.BaseAPI {

    /**
     * User must have the MANAGE_API_KEYS permission to use this service
     * List all API Keys for a subscription
     */
    async getApiKeysForApiSubscriptionRaw(requestParameters: GetApiKeysForApiSubscriptionRequest): Promise<runtime.ApiResponse<Array<ApiKeyEntity>>> {
        if (requestParameters.subscription === null || requestParameters.subscription === undefined) {
            throw new runtime.RequiredError('subscription','Required parameter requestParameters.subscription was null or undefined when calling getApiKeysForApiSubscription.');
        }

        if (requestParameters.api === null || requestParameters.api === undefined) {
            throw new runtime.RequiredError('api','Required parameter requestParameters.api was null or undefined when calling getApiKeysForApiSubscription.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling getApiKeysForApiSubscription.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling getApiKeysForApiSubscription.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/apis/{api}/subscriptions/{subscription}/apikeys`.replace(`{${"subscription"}}`, encodeURIComponent(String(requestParameters.subscription))).replace(`{${"api"}}`, encodeURIComponent(String(requestParameters.api))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ApiKeyEntityFromJSON));
    }

    /**
     * User must have the MANAGE_API_KEYS permission to use this service
     * List all API Keys for a subscription
     */
    async getApiKeysForApiSubscription(requestParameters: GetApiKeysForApiSubscriptionRequest): Promise<Array<ApiKeyEntity>> {
        const response = await this.getApiKeysForApiSubscriptionRaw(requestParameters);
        return await response.value();
    }

    /**
     * User must have the READ permission to use this service
     * List all API Keys for an application
     */
    async getApiKeysForApplicationRaw(requestParameters: GetApiKeysForApplicationRequest): Promise<runtime.ApiResponse<Array<ApiKeyEntity>>> {
        if (requestParameters.application === null || requestParameters.application === undefined) {
            throw new runtime.RequiredError('application','Required parameter requestParameters.application was null or undefined when calling getApiKeysForApplication.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling getApiKeysForApplication.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling getApiKeysForApplication.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/applications/{application}/apikeys`.replace(`{${"application"}}`, encodeURIComponent(String(requestParameters.application))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ApiKeyEntityFromJSON));
    }

    /**
     * User must have the READ permission to use this service
     * List all API Keys for an application
     */
    async getApiKeysForApplication(requestParameters: GetApiKeysForApplicationRequest): Promise<Array<ApiKeyEntity>> {
        const response = await this.getApiKeysForApplicationRaw(requestParameters);
        return await response.value();
    }

    /**
     * User must have the READ permission to use this service
     * List all API Keys for a subscription
     */
    async getApiKeysForApplicationSubscriptionRaw(requestParameters: GetApiKeysForApplicationSubscriptionRequest): Promise<runtime.ApiResponse<Array<ApiKeyEntity>>> {
        if (requestParameters.subscription === null || requestParameters.subscription === undefined) {
            throw new runtime.RequiredError('subscription','Required parameter requestParameters.subscription was null or undefined when calling getApiKeysForApplicationSubscription.');
        }

        if (requestParameters.application === null || requestParameters.application === undefined) {
            throw new runtime.RequiredError('application','Required parameter requestParameters.application was null or undefined when calling getApiKeysForApplicationSubscription.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling getApiKeysForApplicationSubscription.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling getApiKeysForApplicationSubscription.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/applications/{application}/subscriptions/{subscription}/apikeys`.replace(`{${"subscription"}}`, encodeURIComponent(String(requestParameters.subscription))).replace(`{${"application"}}`, encodeURIComponent(String(requestParameters.application))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ApiKeyEntityFromJSON));
    }

    /**
     * User must have the READ permission to use this service
     * List all API Keys for a subscription
     */
    async getApiKeysForApplicationSubscription(requestParameters: GetApiKeysForApplicationSubscriptionRequest): Promise<Array<ApiKeyEntity>> {
        const response = await this.getApiKeysForApplicationSubscriptionRaw(requestParameters);
        return await response.value();
    }

    /**
     * User must have the API_SUBSCRIPTION permission to use this service
     * Reactivate an API key
     */
    async reactivateApiKeyForApiSubscriptionRaw(requestParameters: ReactivateApiKeyForApiSubscriptionRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.apikey === null || requestParameters.apikey === undefined) {
            throw new runtime.RequiredError('apikey','Required parameter requestParameters.apikey was null or undefined when calling reactivateApiKeyForApiSubscription.');
        }

        if (requestParameters.subscription === null || requestParameters.subscription === undefined) {
            throw new runtime.RequiredError('subscription','Required parameter requestParameters.subscription was null or undefined when calling reactivateApiKeyForApiSubscription.');
        }

        if (requestParameters.api === null || requestParameters.api === undefined) {
            throw new runtime.RequiredError('api','Required parameter requestParameters.api was null or undefined when calling reactivateApiKeyForApiSubscription.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling reactivateApiKeyForApiSubscription.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling reactivateApiKeyForApiSubscription.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/apis/{api}/subscriptions/{subscription}/apikeys/{apikey}/_reactivate`.replace(`{${"apikey"}}`, encodeURIComponent(String(requestParameters.apikey))).replace(`{${"subscription"}}`, encodeURIComponent(String(requestParameters.subscription))).replace(`{${"api"}}`, encodeURIComponent(String(requestParameters.api))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * User must have the API_SUBSCRIPTION permission to use this service
     * Reactivate an API key
     */
    async reactivateApiKeyForApiSubscription(requestParameters: ReactivateApiKeyForApiSubscriptionRequest): Promise<void> {
        await this.reactivateApiKeyForApiSubscriptionRaw(requestParameters);
    }

    /**
     * User must have the MANAGE_API_KEYS permission to use this service
     * Renew an API key
     */
    async renewApiKeyForApplicationSubscriptionRaw(requestParameters: RenewApiKeyForApplicationSubscriptionRequest): Promise<runtime.ApiResponse<ApiKeyEntity>> {
        if (requestParameters.application === null || requestParameters.application === undefined) {
            throw new runtime.RequiredError('application','Required parameter requestParameters.application was null or undefined when calling renewApiKeyForApplicationSubscription.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling renewApiKeyForApplicationSubscription.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling renewApiKeyForApplicationSubscription.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/applications/{application}/apikeys/_renew`.replace(`{${"application"}}`, encodeURIComponent(String(requestParameters.application))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiKeyEntityFromJSON(jsonValue));
    }

    /**
     * User must have the MANAGE_API_KEYS permission to use this service
     * Renew an API key
     */
    async renewApiKeyForApplicationSubscription(requestParameters: RenewApiKeyForApplicationSubscriptionRequest): Promise<ApiKeyEntity> {
        const response = await this.renewApiKeyForApplicationSubscriptionRaw(requestParameters);
        return await response.value();
    }

    /**
     * User must have the MANAGE_API_KEYS permission to use this service
     * Renew an API key
     */
    async renewApiKeyForApplicationSubscription1Raw(requestParameters: RenewApiKeyForApplicationSubscription1Request): Promise<runtime.ApiResponse<ApiKeyEntity>> {
        if (requestParameters.subscription === null || requestParameters.subscription === undefined) {
            throw new runtime.RequiredError('subscription','Required parameter requestParameters.subscription was null or undefined when calling renewApiKeyForApplicationSubscription1.');
        }

        if (requestParameters.application === null || requestParameters.application === undefined) {
            throw new runtime.RequiredError('application','Required parameter requestParameters.application was null or undefined when calling renewApiKeyForApplicationSubscription1.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling renewApiKeyForApplicationSubscription1.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling renewApiKeyForApplicationSubscription1.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/applications/{application}/subscriptions/{subscription}/apikeys/_renew`.replace(`{${"subscription"}}`, encodeURIComponent(String(requestParameters.subscription))).replace(`{${"application"}}`, encodeURIComponent(String(requestParameters.application))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiKeyEntityFromJSON(jsonValue));
    }

    /**
     * User must have the MANAGE_API_KEYS permission to use this service
     * Renew an API key
     */
    async renewApiKeyForApplicationSubscription1(requestParameters: RenewApiKeyForApplicationSubscription1Request): Promise<ApiKeyEntity> {
        const response = await this.renewApiKeyForApplicationSubscription1Raw(requestParameters);
        return await response.value();
    }

    /**
     * User must have the MANAGE_API_KEYS permission to use this service
     * Renew an API key
     */
    async renewSubscriptionApiKeysForApiSubscriptionRaw(requestParameters: RenewSubscriptionApiKeysForApiSubscriptionRequest): Promise<runtime.ApiResponse<ApiKeyEntity>> {
        if (requestParameters.subscription === null || requestParameters.subscription === undefined) {
            throw new runtime.RequiredError('subscription','Required parameter requestParameters.subscription was null or undefined when calling renewSubscriptionApiKeysForApiSubscription.');
        }

        if (requestParameters.api === null || requestParameters.api === undefined) {
            throw new runtime.RequiredError('api','Required parameter requestParameters.api was null or undefined when calling renewSubscriptionApiKeysForApiSubscription.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling renewSubscriptionApiKeysForApiSubscription.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling renewSubscriptionApiKeysForApiSubscription.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.customApiKey !== undefined) {
            queryParameters['customApiKey'] = requestParameters.customApiKey;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/apis/{api}/subscriptions/{subscription}/apikeys/_renew`.replace(`{${"subscription"}}`, encodeURIComponent(String(requestParameters.subscription))).replace(`{${"api"}}`, encodeURIComponent(String(requestParameters.api))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiKeyEntityFromJSON(jsonValue));
    }

    /**
     * User must have the MANAGE_API_KEYS permission to use this service
     * Renew an API key
     */
    async renewSubscriptionApiKeysForApiSubscription(requestParameters: RenewSubscriptionApiKeysForApiSubscriptionRequest): Promise<ApiKeyEntity> {
        const response = await this.renewSubscriptionApiKeysForApiSubscriptionRaw(requestParameters);
        return await response.value();
    }

    /**
     * User must have the API_SUBSCRIPTION:DELETE permission to use this service
     * Revoke API key
     */
    async revokeApiKeyForApiSubscriptionRaw(requestParameters: RevokeApiKeyForApiSubscriptionRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.apikey === null || requestParameters.apikey === undefined) {
            throw new runtime.RequiredError('apikey','Required parameter requestParameters.apikey was null or undefined when calling revokeApiKeyForApiSubscription.');
        }

        if (requestParameters.subscription === null || requestParameters.subscription === undefined) {
            throw new runtime.RequiredError('subscription','Required parameter requestParameters.subscription was null or undefined when calling revokeApiKeyForApiSubscription.');
        }

        if (requestParameters.api === null || requestParameters.api === undefined) {
            throw new runtime.RequiredError('api','Required parameter requestParameters.api was null or undefined when calling revokeApiKeyForApiSubscription.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling revokeApiKeyForApiSubscription.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling revokeApiKeyForApiSubscription.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/apis/{api}/subscriptions/{subscription}/apikeys/{apikey}`.replace(`{${"apikey"}}`, encodeURIComponent(String(requestParameters.apikey))).replace(`{${"subscription"}}`, encodeURIComponent(String(requestParameters.subscription))).replace(`{${"api"}}`, encodeURIComponent(String(requestParameters.api))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * User must have the API_SUBSCRIPTION:DELETE permission to use this service
     * Revoke API key
     */
    async revokeApiKeyForApiSubscription(requestParameters: RevokeApiKeyForApiSubscriptionRequest): Promise<void> {
        await this.revokeApiKeyForApiSubscriptionRaw(requestParameters);
    }

    /**
     * User must have the MANAGE_API_KEYS permission to use this service
     * Revoke an API key
     */
    async revokeApiKeyForApplicationRaw(requestParameters: RevokeApiKeyForApplicationRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.apikey === null || requestParameters.apikey === undefined) {
            throw new runtime.RequiredError('apikey','Required parameter requestParameters.apikey was null or undefined when calling revokeApiKeyForApplication.');
        }

        if (requestParameters.application === null || requestParameters.application === undefined) {
            throw new runtime.RequiredError('application','Required parameter requestParameters.application was null or undefined when calling revokeApiKeyForApplication.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling revokeApiKeyForApplication.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling revokeApiKeyForApplication.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/applications/{application}/apikeys/{apikey}`.replace(`{${"apikey"}}`, encodeURIComponent(String(requestParameters.apikey))).replace(`{${"application"}}`, encodeURIComponent(String(requestParameters.application))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * User must have the MANAGE_API_KEYS permission to use this service
     * Revoke an API key
     */
    async revokeApiKeyForApplication(requestParameters: RevokeApiKeyForApplicationRequest): Promise<void> {
        await this.revokeApiKeyForApplicationRaw(requestParameters);
    }

    /**
     * User must have the MANAGE_API_KEYS permission to use this service
     * Revoke an API key
     */
    async revokeApiKeyForApplicationSubscriptionRaw(requestParameters: RevokeApiKeyForApplicationSubscriptionRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.apikey === null || requestParameters.apikey === undefined) {
            throw new runtime.RequiredError('apikey','Required parameter requestParameters.apikey was null or undefined when calling revokeApiKeyForApplicationSubscription.');
        }

        if (requestParameters.subscription === null || requestParameters.subscription === undefined) {
            throw new runtime.RequiredError('subscription','Required parameter requestParameters.subscription was null or undefined when calling revokeApiKeyForApplicationSubscription.');
        }

        if (requestParameters.application === null || requestParameters.application === undefined) {
            throw new runtime.RequiredError('application','Required parameter requestParameters.application was null or undefined when calling revokeApiKeyForApplicationSubscription.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling revokeApiKeyForApplicationSubscription.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling revokeApiKeyForApplicationSubscription.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/applications/{application}/subscriptions/{subscription}/apikeys/{apikey}`.replace(`{${"apikey"}}`, encodeURIComponent(String(requestParameters.apikey))).replace(`{${"subscription"}}`, encodeURIComponent(String(requestParameters.subscription))).replace(`{${"application"}}`, encodeURIComponent(String(requestParameters.application))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * User must have the MANAGE_API_KEYS permission to use this service
     * Revoke an API key
     */
    async revokeApiKeyForApplicationSubscription(requestParameters: RevokeApiKeyForApplicationSubscriptionRequest): Promise<void> {
        await this.revokeApiKeyForApplicationSubscriptionRaw(requestParameters);
    }

    /**
     * User must have the API_SUBSCRIPTION:UPDATE permission to use this service
     * Update API Key
     */
    async updateApiKeyForApiSubscriptionRaw(requestParameters: UpdateApiKeyForApiSubscriptionRequest): Promise<runtime.ApiResponse<ApiKeyEntity>> {
        if (requestParameters.apikey === null || requestParameters.apikey === undefined) {
            throw new runtime.RequiredError('apikey','Required parameter requestParameters.apikey was null or undefined when calling updateApiKeyForApiSubscription.');
        }

        if (requestParameters.subscription === null || requestParameters.subscription === undefined) {
            throw new runtime.RequiredError('subscription','Required parameter requestParameters.subscription was null or undefined when calling updateApiKeyForApiSubscription.');
        }

        if (requestParameters.api === null || requestParameters.api === undefined) {
            throw new runtime.RequiredError('api','Required parameter requestParameters.api was null or undefined when calling updateApiKeyForApiSubscription.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling updateApiKeyForApiSubscription.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling updateApiKeyForApiSubscription.');
        }

        if (requestParameters.apiKeyEntity === null || requestParameters.apiKeyEntity === undefined) {
            throw new runtime.RequiredError('apiKeyEntity','Required parameter requestParameters.apiKeyEntity was null or undefined when calling updateApiKeyForApiSubscription.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/apis/{api}/subscriptions/{subscription}/apikeys/{apikey}`.replace(`{${"apikey"}}`, encodeURIComponent(String(requestParameters.apikey))).replace(`{${"subscription"}}`, encodeURIComponent(String(requestParameters.subscription))).replace(`{${"api"}}`, encodeURIComponent(String(requestParameters.api))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ApiKeyEntityToJSON(requestParameters.apiKeyEntity),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiKeyEntityFromJSON(jsonValue));
    }

    /**
     * User must have the API_SUBSCRIPTION:UPDATE permission to use this service
     * Update API Key
     */
    async updateApiKeyForApiSubscription(requestParameters: UpdateApiKeyForApiSubscriptionRequest): Promise<ApiKeyEntity> {
        const response = await this.updateApiKeyForApiSubscriptionRaw(requestParameters);
        return await response.value();
    }

}
