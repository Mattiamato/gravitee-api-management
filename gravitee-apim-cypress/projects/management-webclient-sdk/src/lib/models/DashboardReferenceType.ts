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

/**
 * 
 * @export
 * @enum {string}
 */
export enum DashboardReferenceType {
    API = 'API',
    APPLICATION = 'APPLICATION',
    PLATFORM = 'PLATFORM',
    HOME = 'HOME'
}

export function DashboardReferenceTypeFromJSON(json: any): DashboardReferenceType {
    return DashboardReferenceTypeFromJSONTyped(json, false);
}

export function DashboardReferenceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DashboardReferenceType {
    return json as DashboardReferenceType;
}

export function DashboardReferenceTypeToJSON(value?: DashboardReferenceType | null): any {
    return value as any;
}

