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
    PromotionEntity,
    PromotionEntityFromJSON,
    PromotionEntityToJSON,
} from '../models';

export interface ProcessPromotionRequest {
    promotion: string;
    orgId: string;
    body?: boolean;
}

export interface SearchPromotionsRequest {
    statuses: Array<string>;
    apiId: string;
    orgId: string;
}

/**
 * 
 */
export class PromotionsApi extends runtime.BaseAPI {

    /**
     * Process an API promotion by accepting or rejecting it
     */
    async processPromotionRaw(requestParameters: ProcessPromotionRequest): Promise<runtime.ApiResponse<PromotionEntity>> {
        if (requestParameters.promotion === null || requestParameters.promotion === undefined) {
            throw new runtime.RequiredError('promotion','Required parameter requestParameters.promotion was null or undefined when calling processPromotion.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling processPromotion.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/promotions/{promotion}/_process`.replace(`{${"promotion"}}`, encodeURIComponent(String(requestParameters.promotion))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PromotionEntityFromJSON(jsonValue));
    }

    /**
     * Process an API promotion by accepting or rejecting it
     */
    async processPromotion(requestParameters: ProcessPromotionRequest): Promise<PromotionEntity> {
        const response = await this.processPromotionRaw(requestParameters);
        return await response.value();
    }

    /**
     * Search for Promotion
     */
    async searchPromotionsRaw(requestParameters: SearchPromotionsRequest): Promise<runtime.ApiResponse<Array<PromotionEntity>>> {
        if (requestParameters.statuses === null || requestParameters.statuses === undefined) {
            throw new runtime.RequiredError('statuses','Required parameter requestParameters.statuses was null or undefined when calling searchPromotions.');
        }

        if (requestParameters.apiId === null || requestParameters.apiId === undefined) {
            throw new runtime.RequiredError('apiId','Required parameter requestParameters.apiId was null or undefined when calling searchPromotions.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling searchPromotions.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.statuses) {
            queryParameters['statuses'] = requestParameters.statuses;
        }

        if (requestParameters.apiId !== undefined) {
            queryParameters['apiId'] = requestParameters.apiId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/promotions/_search`.replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PromotionEntityFromJSON));
    }

    /**
     * Search for Promotion
     */
    async searchPromotions(requestParameters: SearchPromotionsRequest): Promise<Array<PromotionEntity>> {
        const response = await this.searchPromotionsRaw(requestParameters);
        return await response.value();
    }

}
