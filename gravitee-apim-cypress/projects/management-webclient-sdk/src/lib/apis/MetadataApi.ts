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
    MetadataEntity,
    MetadataEntityFromJSON,
    MetadataEntityToJSON,
    NewMetadataEntity,
    NewMetadataEntityFromJSON,
    NewMetadataEntityToJSON,
    UpdateMetadataEntity,
    UpdateMetadataEntityFromJSON,
    UpdateMetadataEntityToJSON,
} from '../models';

export interface CreateMetadataRequest {
    envId: string;
    orgId: string;
    newMetadataEntity: NewMetadataEntity;
}

export interface DeleteMetadataRequest {
    metadata: string;
    envId: string;
    orgId: string;
}

export interface GetMetadatasRequest {
    envId: string;
    orgId: string;
}

export interface UpdateMetadataRequest {
    envId: string;
    orgId: string;
    updateMetadataEntity: UpdateMetadataEntity;
}

/**
 * 
 */
export class MetadataApi extends runtime.BaseAPI {

    /**
     * User must have the PORTAL_METADATA[CREATE] permission to use this service
     * Create a platform metadata
     */
    async createMetadataRaw(requestParameters: CreateMetadataRequest): Promise<runtime.ApiResponse<MetadataEntity>> {
        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling createMetadata.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling createMetadata.');
        }

        if (requestParameters.newMetadataEntity === null || requestParameters.newMetadataEntity === undefined) {
            throw new runtime.RequiredError('newMetadataEntity','Required parameter requestParameters.newMetadataEntity was null or undefined when calling createMetadata.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/configuration/metadata`.replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NewMetadataEntityToJSON(requestParameters.newMetadataEntity),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetadataEntityFromJSON(jsonValue));
    }

    /**
     * User must have the PORTAL_METADATA[CREATE] permission to use this service
     * Create a platform metadata
     */
    async createMetadata(requestParameters: CreateMetadataRequest): Promise<MetadataEntity> {
        const response = await this.createMetadataRaw(requestParameters);
        return await response.value();
    }

    /**
     * User must have the PORTAL_METADATA[DELETE] permission to use this service
     * Delete a platform metadata
     */
    async deleteMetadataRaw(requestParameters: DeleteMetadataRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.metadata === null || requestParameters.metadata === undefined) {
            throw new runtime.RequiredError('metadata','Required parameter requestParameters.metadata was null or undefined when calling deleteMetadata.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling deleteMetadata.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling deleteMetadata.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/configuration/metadata/{metadata}`.replace(`{${"metadata"}}`, encodeURIComponent(String(requestParameters.metadata))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * User must have the PORTAL_METADATA[DELETE] permission to use this service
     * Delete a platform metadata
     */
    async deleteMetadata(requestParameters: DeleteMetadataRequest): Promise<void> {
        await this.deleteMetadataRaw(requestParameters);
    }

    /**
     * User must have the PORTAL_METADATA[READ] permission to use this service
     * Retrieve the list of platform metadata
     */
    async getMetadatasRaw(requestParameters: GetMetadatasRequest): Promise<runtime.ApiResponse<Array<MetadataEntity>>> {
        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling getMetadatas.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling getMetadatas.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/configuration/metadata`.replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MetadataEntityFromJSON));
    }

    /**
     * User must have the PORTAL_METADATA[READ] permission to use this service
     * Retrieve the list of platform metadata
     */
    async getMetadatas(requestParameters: GetMetadatasRequest): Promise<Array<MetadataEntity>> {
        const response = await this.getMetadatasRaw(requestParameters);
        return await response.value();
    }

    /**
     * User must have the PORTAL_METADATA[UPDATE] permission to use this service
     * Update a platform metadata
     */
    async updateMetadataRaw(requestParameters: UpdateMetadataRequest): Promise<runtime.ApiResponse<MetadataEntity>> {
        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling updateMetadata.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling updateMetadata.');
        }

        if (requestParameters.updateMetadataEntity === null || requestParameters.updateMetadataEntity === undefined) {
            throw new runtime.RequiredError('updateMetadataEntity','Required parameter requestParameters.updateMetadataEntity was null or undefined when calling updateMetadata.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/configuration/metadata`.replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateMetadataEntityToJSON(requestParameters.updateMetadataEntity),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetadataEntityFromJSON(jsonValue));
    }

    /**
     * User must have the PORTAL_METADATA[UPDATE] permission to use this service
     * Update a platform metadata
     */
    async updateMetadata(requestParameters: UpdateMetadataRequest): Promise<MetadataEntity> {
        const response = await this.updateMetadataRaw(requestParameters);
        return await response.value();
    }

}
