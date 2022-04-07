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
import {
    Request,
    RequestFromJSON,
    RequestFromJSONTyped,
    RequestToJSON,
    Response,
    ResponseFromJSON,
    ResponseFromJSONTyped,
    ResponseToJSON,
} from './';

/**
 * 
 * @export
 * @interface Log
 */
export interface Log {
    /**
     * 
     * @type {string}
     * @memberof Log
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof Log
     */
    timestamp?: number;
    /**
     * 
     * @type {string}
     * @memberof Log
     */
    gateway?: string;
    /**
     * 
     * @type {string}
     * @memberof Log
     */
    endpoint?: string;
    /**
     * 
     * @type {number}
     * @memberof Log
     */
    responseTime?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Log
     */
    success?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Log
     */
    available?: boolean;
    /**
     * 
     * @type {number}
     * @memberof Log
     */
    state?: number;
    /**
     * 
     * @type {string}
     * @memberof Log
     */
    message?: string;
    /**
     * 
     * @type {Request}
     * @memberof Log
     */
    request?: Request;
    /**
     * 
     * @type {Response}
     * @memberof Log
     */
    response?: Response;
}

export function LogFromJSON(json: any): Log {
    return LogFromJSONTyped(json, false);
}

export function LogFromJSONTyped(json: any, ignoreDiscriminator: boolean): Log {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'timestamp': !exists(json, 'timestamp') ? undefined : json['timestamp'],
        'gateway': !exists(json, 'gateway') ? undefined : json['gateway'],
        'endpoint': !exists(json, 'endpoint') ? undefined : json['endpoint'],
        'responseTime': !exists(json, 'responseTime') ? undefined : json['responseTime'],
        'success': !exists(json, 'success') ? undefined : json['success'],
        'available': !exists(json, 'available') ? undefined : json['available'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'request': !exists(json, 'request') ? undefined : RequestFromJSON(json['request']),
        'response': !exists(json, 'response') ? undefined : ResponseFromJSON(json['response']),
    };
}

export function LogToJSON(value?: Log | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'timestamp': value.timestamp,
        'gateway': value.gateway,
        'endpoint': value.endpoint,
        'responseTime': value.responseTime,
        'success': value.success,
        'available': value.available,
        'state': value.state,
        'message': value.message,
        'request': RequestToJSON(value.request),
        'response': ResponseToJSON(value.response),
    };
}


