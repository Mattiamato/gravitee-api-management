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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ApplicationRequestItem
 */
export interface ApplicationRequestItem {
    /**
     * 
     * @type {string}
     * @memberof ApplicationRequestItem
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof ApplicationRequestItem
     */
    timestamp?: number;
    /**
     * 
     * @type {string}
     * @memberof ApplicationRequestItem
     */
    transactionId?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationRequestItem
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationRequestItem
     */
    method?: ApplicationRequestItemMethodEnum;
    /**
     * 
     * @type {number}
     * @memberof ApplicationRequestItem
     */
    status?: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicationRequestItem
     */
    responseTime?: number;
    /**
     * 
     * @type {string}
     * @memberof ApplicationRequestItem
     */
    plan?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationRequestItem
     */
    api?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationRequestItem
     */
    user?: string;
}

export function ApplicationRequestItemFromJSON(json: any): ApplicationRequestItem {
    return ApplicationRequestItemFromJSONTyped(json, false);
}

export function ApplicationRequestItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationRequestItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'timestamp': !exists(json, 'timestamp') ? undefined : json['timestamp'],
        'transactionId': !exists(json, 'transactionId') ? undefined : json['transactionId'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'method': !exists(json, 'method') ? undefined : json['method'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'responseTime': !exists(json, 'responseTime') ? undefined : json['responseTime'],
        'plan': !exists(json, 'plan') ? undefined : json['plan'],
        'api': !exists(json, 'api') ? undefined : json['api'],
        'user': !exists(json, 'user') ? undefined : json['user'],
    };
}

export function ApplicationRequestItemToJSON(value?: ApplicationRequestItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'timestamp': value.timestamp,
        'transactionId': value.transactionId,
        'path': value.path,
        'method': value.method,
        'status': value.status,
        'responseTime': value.responseTime,
        'plan': value.plan,
        'api': value.api,
        'user': value.user,
    };
}

/**
* @export
* @enum {string}
*/
export enum ApplicationRequestItemMethodEnum {
    CONNECT = 'CONNECT',
    DELETE = 'DELETE',
    GET = 'GET',
    HEAD = 'HEAD',
    OPTIONS = 'OPTIONS',
    PATCH = 'PATCH',
    POST = 'POST',
    PUT = 'PUT',
    TRACE = 'TRACE',
    OTHER = 'OTHER'
}


