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
export enum InitialAccessTokenType {
    INITIALACCESSTOKEN = 'INITIAL_ACCESS_TOKEN',
    CLIENTCREDENTIALS = 'CLIENT_CREDENTIALS'
}

export function InitialAccessTokenTypeFromJSON(json: any): InitialAccessTokenType {
    return InitialAccessTokenTypeFromJSONTyped(json, false);
}

export function InitialAccessTokenTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): InitialAccessTokenType {
    return json as InitialAccessTokenType;
}

export function InitialAccessTokenTypeToJSON(value?: InitialAccessTokenType | null): any {
    return value as any;
}

