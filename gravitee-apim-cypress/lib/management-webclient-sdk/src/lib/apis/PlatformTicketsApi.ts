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
    NewTicketEntity,
    NewTicketEntityFromJSON,
    NewTicketEntityToJSON,
    TicketEntity,
    TicketEntityFromJSON,
    TicketEntityToJSON,
    TicketEntityPage,
    TicketEntityPageFromJSON,
    TicketEntityPageToJSON,
} from '../models';

export interface CreatePlatformTicketRequest {
    envId: string;
    orgId: string;
    newTicketEntity: NewTicketEntity;
}

export interface CreatePlatformTicket1Request {
    envId: string;
    orgId: string;
    newTicketEntity: NewTicketEntity;
}

export interface GetTicketRequest {
    ticket: string;
    envId: string;
    orgId: string;
}

export interface GetTicket1Request {
    ticket: string;
    envId: string;
    orgId: string;
}

export interface GetTicketsRequest {
    size?: number;
    page?: number;
    apiId?: string;
    applicationId?: string;
    order?: string;
    envId: string;
    orgId: string;
}

export interface GetTickets1Request {
    size?: number;
    page?: number;
    apiId?: string;
    applicationId?: string;
    order?: string;
    envId: string;
    orgId: string;
}

/**
 * 
 */
export class PlatformTicketsApi extends runtime.BaseAPI {

    /**
     * Create a platform ticket
     */
    async createPlatformTicketRaw(requestParameters: CreatePlatformTicketRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling createPlatformTicket.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling createPlatformTicket.');
        }

        if (requestParameters.newTicketEntity === null || requestParameters.newTicketEntity === undefined) {
            throw new runtime.RequiredError('newTicketEntity','Required parameter requestParameters.newTicketEntity was null or undefined when calling createPlatformTicket.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/platform/tickets`.replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NewTicketEntityToJSON(requestParameters.newTicketEntity),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create a platform ticket
     */
    async createPlatformTicket(requestParameters: CreatePlatformTicketRequest): Promise<void> {
        await this.createPlatformTicketRaw(requestParameters);
    }

    /**
     * Create a platform ticket
     */
    async createPlatformTicket1Raw(requestParameters: CreatePlatformTicket1Request): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling createPlatformTicket1.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling createPlatformTicket1.');
        }

        if (requestParameters.newTicketEntity === null || requestParameters.newTicketEntity === undefined) {
            throw new runtime.RequiredError('newTicketEntity','Required parameter requestParameters.newTicketEntity was null or undefined when calling createPlatformTicket1.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/tickets`.replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NewTicketEntityToJSON(requestParameters.newTicketEntity),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create a platform ticket
     */
    async createPlatformTicket1(requestParameters: CreatePlatformTicket1Request): Promise<void> {
        await this.createPlatformTicket1Raw(requestParameters);
    }

    /**
     * Get a specific ticket
     */
    async getTicketRaw(requestParameters: GetTicketRequest): Promise<runtime.ApiResponse<TicketEntity>> {
        if (requestParameters.ticket === null || requestParameters.ticket === undefined) {
            throw new runtime.RequiredError('ticket','Required parameter requestParameters.ticket was null or undefined when calling getTicket.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling getTicket.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling getTicket.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/platform/tickets/{ticket}`.replace(`{${"ticket"}}`, encodeURIComponent(String(requestParameters.ticket))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TicketEntityFromJSON(jsonValue));
    }

    /**
     * Get a specific ticket
     */
    async getTicket(requestParameters: GetTicketRequest): Promise<TicketEntity> {
        const response = await this.getTicketRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get a specific ticket
     */
    async getTicket1Raw(requestParameters: GetTicket1Request): Promise<runtime.ApiResponse<TicketEntity>> {
        if (requestParameters.ticket === null || requestParameters.ticket === undefined) {
            throw new runtime.RequiredError('ticket','Required parameter requestParameters.ticket was null or undefined when calling getTicket1.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling getTicket1.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling getTicket1.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/tickets/{ticket}`.replace(`{${"ticket"}}`, encodeURIComponent(String(requestParameters.ticket))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TicketEntityFromJSON(jsonValue));
    }

    /**
     * Get a specific ticket
     */
    async getTicket1(requestParameters: GetTicket1Request): Promise<TicketEntity> {
        const response = await this.getTicket1Raw(requestParameters);
        return await response.value();
    }

    /**
     * Search for platform tickets written by current user
     */
    async getTicketsRaw(requestParameters: GetTicketsRequest): Promise<runtime.ApiResponse<TicketEntityPage>> {
        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling getTickets.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling getTickets.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.apiId !== undefined) {
            queryParameters['apiId'] = requestParameters.apiId;
        }

        if (requestParameters.applicationId !== undefined) {
            queryParameters['applicationId'] = requestParameters.applicationId;
        }

        if (requestParameters.order !== undefined) {
            queryParameters['order'] = requestParameters.order;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/platform/tickets`.replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TicketEntityPageFromJSON(jsonValue));
    }

    /**
     * Search for platform tickets written by current user
     */
    async getTickets(requestParameters: GetTicketsRequest): Promise<TicketEntityPage> {
        const response = await this.getTicketsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Search for platform tickets written by current user
     */
    async getTickets1Raw(requestParameters: GetTickets1Request): Promise<runtime.ApiResponse<TicketEntityPage>> {
        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling getTickets1.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling getTickets1.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.apiId !== undefined) {
            queryParameters['apiId'] = requestParameters.apiId;
        }

        if (requestParameters.applicationId !== undefined) {
            queryParameters['applicationId'] = requestParameters.applicationId;
        }

        if (requestParameters.order !== undefined) {
            queryParameters['order'] = requestParameters.order;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/tickets`.replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TicketEntityPageFromJSON(jsonValue));
    }

    /**
     * Search for platform tickets written by current user
     */
    async getTickets1(requestParameters: GetTickets1Request): Promise<TicketEntityPage> {
        const response = await this.getTickets1Raw(requestParameters);
        return await response.value();
    }

}
