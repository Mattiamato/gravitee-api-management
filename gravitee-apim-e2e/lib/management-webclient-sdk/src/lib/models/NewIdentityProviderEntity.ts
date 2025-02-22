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
    IdentityProviderType,
    IdentityProviderTypeFromJSON,
    IdentityProviderTypeFromJSONTyped,
    IdentityProviderTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface NewIdentityProviderEntity
 */
export interface NewIdentityProviderEntity {
    /**
     * 
     * @type {string}
     * @memberof NewIdentityProviderEntity
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewIdentityProviderEntity
     */
    description?: string;
    /**
     * 
     * @type {IdentityProviderType}
     * @memberof NewIdentityProviderEntity
     */
    type: IdentityProviderType;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof NewIdentityProviderEntity
     */
    configuration: { [key: string]: any; };
    /**
     * 
     * @type {boolean}
     * @memberof NewIdentityProviderEntity
     */
    enabled?: boolean;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof NewIdentityProviderEntity
     */
    userProfileMapping?: { [key: string]: string; };
    /**
     * 
     * @type {boolean}
     * @memberof NewIdentityProviderEntity
     */
    emailRequired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NewIdentityProviderEntity
     */
    syncMappings?: boolean;
}

export function NewIdentityProviderEntityFromJSON(json: any): NewIdentityProviderEntity {
    return NewIdentityProviderEntityFromJSONTyped(json, false);
}

export function NewIdentityProviderEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewIdentityProviderEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'type': IdentityProviderTypeFromJSON(json['type']),
        'configuration': json['configuration'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'userProfileMapping': !exists(json, 'userProfileMapping') ? undefined : json['userProfileMapping'],
        'emailRequired': !exists(json, 'emailRequired') ? undefined : json['emailRequired'],
        'syncMappings': !exists(json, 'syncMappings') ? undefined : json['syncMappings'],
    };
}

export function NewIdentityProviderEntityToJSON(value?: NewIdentityProviderEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'type': IdentityProviderTypeToJSON(value.type),
        'configuration': value.configuration,
        'enabled': value.enabled,
        'userProfileMapping': value.userProfileMapping,
        'emailRequired': value.emailRequired,
        'syncMappings': value.syncMappings,
    };
}


