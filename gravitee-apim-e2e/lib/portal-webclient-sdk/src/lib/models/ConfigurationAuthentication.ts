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
    Enabled,
    EnabledFromJSON,
    EnabledFromJSONTyped,
    EnabledToJSON,
} from './';

/**
 * 
 * @export
 * @interface ConfigurationAuthentication
 */
export interface ConfigurationAuthentication {
    /**
     * 
     * @type {Enabled}
     * @memberof ConfigurationAuthentication
     */
    forceLogin?: Enabled;
    /**
     * 
     * @type {Enabled}
     * @memberof ConfigurationAuthentication
     */
    localLogin?: Enabled;
}

export function ConfigurationAuthenticationFromJSON(json: any): ConfigurationAuthentication {
    return ConfigurationAuthenticationFromJSONTyped(json, false);
}

export function ConfigurationAuthenticationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationAuthentication {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'forceLogin': !exists(json, 'forceLogin') ? undefined : EnabledFromJSON(json['forceLogin']),
        'localLogin': !exists(json, 'localLogin') ? undefined : EnabledFromJSON(json['localLogin']),
    };
}

export function ConfigurationAuthenticationToJSON(value?: ConfigurationAuthentication | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'forceLogin': EnabledToJSON(value.forceLogin),
        'localLogin': EnabledToJSON(value.localLogin),
    };
}


