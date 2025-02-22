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
/**
 * 
 * @export
 * @interface Info
 */
export interface Info {
    /**
     * Name of the API.
     * @type {string}
     * @memberof Info
     */
    name?: string;
    /**
     * Version of the API.
     * @type {string}
     * @memberof Info
     */
    version?: string;
}

export function InfoFromJSON(json: any): Info {
    return InfoFromJSONTyped(json, false);
}

export function InfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): Info {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function InfoToJSON(value?: Info | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'version': value.version,
    };
}


