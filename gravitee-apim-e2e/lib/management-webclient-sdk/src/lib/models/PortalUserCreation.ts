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
    Enabled,
    EnabledFromJSON,
    EnabledFromJSONTyped,
    EnabledToJSON,
} from './';

/**
 * 
 * @export
 * @interface PortalUserCreation
 */
export interface PortalUserCreation {
    /**
     * 
     * @type {boolean}
     * @memberof PortalUserCreation
     */
    enabled?: boolean;
    /**
     * 
     * @type {Enabled}
     * @memberof PortalUserCreation
     */
    automaticValidation?: Enabled;
}

export function PortalUserCreationFromJSON(json: any): PortalUserCreation {
    return PortalUserCreationFromJSONTyped(json, false);
}

export function PortalUserCreationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PortalUserCreation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'automaticValidation': !exists(json, 'automaticValidation') ? undefined : EnabledFromJSON(json['automaticValidation']),
    };
}

export function PortalUserCreationToJSON(value?: PortalUserCreation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enabled': value.enabled,
        'automaticValidation': EnabledToJSON(value.automaticValidation),
    };
}


