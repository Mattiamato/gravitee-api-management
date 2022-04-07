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
 * @interface EndpointDiscoveryService
 */
export interface EndpointDiscoveryService {
    /**
     * 
     * @type {boolean}
     * @memberof EndpointDiscoveryService
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EndpointDiscoveryService
     */
    provider?: string;
    /**
     * 
     * @type {object}
     * @memberof EndpointDiscoveryService
     */
    _configuration?: object;
}

export function EndpointDiscoveryServiceFromJSON(json: any): EndpointDiscoveryService {
    return EndpointDiscoveryServiceFromJSONTyped(json, false);
}

export function EndpointDiscoveryServiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndpointDiscoveryService {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'provider': !exists(json, 'provider') ? undefined : json['provider'],
        '_configuration': !exists(json, 'configuration') ? undefined : json['configuration'],
    };
}

export function EndpointDiscoveryServiceToJSON(value?: EndpointDiscoveryService | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enabled': value.enabled,
        'provider': value.provider,
        'configuration': value._configuration,
    };
}


