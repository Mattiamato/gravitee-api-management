/* tslint:disable */
/* eslint-disable */
/**
 * Gravitee.io Portal Rest API
 * API dedicated to the devportal part of Gravitee
 *
 * Contact: contact@graviteesource.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Links,
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
    Log,
    LogFromJSON,
    LogFromJSONTyped,
    LogToJSON,
} from './';

/**
 * 
 * @export
 * @interface LogsResponse
 */
export interface LogsResponse {
    /**
     * List of logs.
     * @type {Array<Log>}
     * @memberof LogsResponse
     */
    data?: Array<Log>;
    /**
     * Map of Map of Object
     * @type {{ [key: string]: { [key: string]: any; }; }}
     * @memberof LogsResponse
     */
    metadata?: { [key: string]: { [key: string]: any; }; };
    /**
     * 
     * @type {Links}
     * @memberof LogsResponse
     */
    links?: Links;
}

export function LogsResponseFromJSON(json: any): LogsResponse {
    return LogsResponseFromJSONTyped(json, false);
}

export function LogsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LogsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(LogFromJSON)),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
    };
}

export function LogsResponseToJSON(value?: LogsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(LogToJSON)),
        'metadata': value.metadata,
        'links': LinksToJSON(value.links),
    };
}


