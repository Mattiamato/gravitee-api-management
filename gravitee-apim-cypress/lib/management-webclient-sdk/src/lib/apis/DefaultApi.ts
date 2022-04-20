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
    EnvironmentEntity,
    EnvironmentEntityFromJSON,
    EnvironmentEntityToJSON,
    EnvironmentPermissionsEntity,
    EnvironmentPermissionsEntityFromJSON,
    EnvironmentPermissionsEntityToJSON,
    IdentityProviderActivationEntity,
    IdentityProviderActivationEntityFromJSON,
    IdentityProviderActivationEntityToJSON,
} from '../models';

export interface GetEnvironmentPermissionsRequest {
    envId: string;
    orgId: string;
}

export interface GetEnvironmentsRequest {
    orgId: string;
}

export interface GetEnvironmentsPermissionsRequest {
    idOrHrid?: string;
    orgId: string;
}

export interface GetIdentityProviderActivationsRequest {
    envId: string;
    orgId: string;
}

export interface ListIdentityProviderActivationsRequest {
    orgId: string;
}

export interface TokenExchangeRequest {
    token?: string;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Get permissions on environment
     */
    async getEnvironmentPermissionsRaw(requestParameters: GetEnvironmentPermissionsRequest): Promise<runtime.ApiResponse<{ [key: string]: Array<string>; }>> {
        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling getEnvironmentPermissions.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling getEnvironmentPermissions.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/permissions`.replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get permissions on environment
     */
    async getEnvironmentPermissions(requestParameters: GetEnvironmentPermissionsRequest): Promise<{ [key: string]: Array<string>; }> {
        const response = await this.getEnvironmentPermissionsRaw(requestParameters);
        return await response.value();
    }

    /**
     * List available environments for current user organization
     */
    async getEnvironmentsRaw(requestParameters: GetEnvironmentsRequest): Promise<runtime.ApiResponse<Array<EnvironmentEntity>>> {
        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling getEnvironments.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments`.replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EnvironmentEntityFromJSON));
    }

    /**
     * List available environments for current user organization
     */
    async getEnvironments(requestParameters: GetEnvironmentsRequest): Promise<Array<EnvironmentEntity>> {
        const response = await this.getEnvironmentsRaw(requestParameters);
        return await response.value();
    }

    /**
     * List available environments with their permissions for current user organization
     */
    async getEnvironmentsPermissionsRaw(requestParameters: GetEnvironmentsPermissionsRequest): Promise<runtime.ApiResponse<Array<EnvironmentPermissionsEntity>>> {
        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling getEnvironmentsPermissions.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.idOrHrid !== undefined) {
            queryParameters['idOrHrid'] = requestParameters.idOrHrid;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/permissions`.replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EnvironmentPermissionsEntityFromJSON));
    }

    /**
     * List available environments with their permissions for current user organization
     */
    async getEnvironmentsPermissions(requestParameters: GetEnvironmentsPermissionsRequest): Promise<Array<EnvironmentPermissionsEntity>> {
        const response = await this.getEnvironmentsPermissionsRaw(requestParameters);
        return await response.value();
    }

    /**
     * User must have the ENVIRONMENT_IDENTITY_PROVIDER_ACTIVATION[READ] permission to use this service
     * Get the list of identity provider activations for current environment
     */
    async getIdentityProviderActivationsRaw(requestParameters: GetIdentityProviderActivationsRequest): Promise<runtime.ApiResponse<Array<IdentityProviderActivationEntity>>> {
        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling getIdentityProviderActivations.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling getIdentityProviderActivations.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/identities`.replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(IdentityProviderActivationEntityFromJSON));
    }

    /**
     * User must have the ENVIRONMENT_IDENTITY_PROVIDER_ACTIVATION[READ] permission to use this service
     * Get the list of identity provider activations for current environment
     */
    async getIdentityProviderActivations(requestParameters: GetIdentityProviderActivationsRequest): Promise<Array<IdentityProviderActivationEntity>> {
        const response = await this.getIdentityProviderActivationsRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getSwaggerDefinitionFor317Raw(): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/swagger.json`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async getSwaggerDefinitionFor317(): Promise<void> {
        await this.getSwaggerDefinitionFor317Raw();
    }

    /**
     * User must have the ORGANIZATION_IDENTITY_PROVIDER_ACTIVATION[READ] permission to use this service
     * Get the list of identity provider activations for current organization
     */
    async listIdentityProviderActivationsRaw(requestParameters: ListIdentityProviderActivationsRequest): Promise<runtime.ApiResponse<Array<IdentityProviderActivationEntity>>> {
        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling listIdentityProviderActivations.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/identities`.replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(IdentityProviderActivationEntityFromJSON));
    }

    /**
     * User must have the ORGANIZATION_IDENTITY_PROVIDER_ACTIVATION[READ] permission to use this service
     * Get the list of identity provider activations for current organization
     */
    async listIdentityProviderActivations(requestParameters: ListIdentityProviderActivationsRequest): Promise<Array<IdentityProviderActivationEntity>> {
        const response = await this.listIdentityProviderActivationsRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async tokenExchangeRaw(requestParameters: TokenExchangeRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.token !== undefined) {
            queryParameters['token'] = requestParameters.token;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/auth/cockpit`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async tokenExchange(requestParameters: TokenExchangeRequest): Promise<void> {
        await this.tokenExchangeRaw(requestParameters);
    }

}
