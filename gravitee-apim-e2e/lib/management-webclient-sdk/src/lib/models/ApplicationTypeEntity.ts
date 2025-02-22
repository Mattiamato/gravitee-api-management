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
    ApplicationGrantTypeEntity,
    ApplicationGrantTypeEntityFromJSON,
    ApplicationGrantTypeEntityFromJSONTyped,
    ApplicationGrantTypeEntityToJSON,
} from './';

/**
 * 
 * @export
 * @interface ApplicationTypeEntity
 */
export interface ApplicationTypeEntity {
    /**
     * 
     * @type {string}
     * @memberof ApplicationTypeEntity
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationTypeEntity
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationTypeEntity
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ApplicationTypeEntity
     */
    requires_redirect_uris?: boolean;
    /**
     * 
     * @type {Array<ApplicationGrantTypeEntity>}
     * @memberof ApplicationTypeEntity
     */
    allowed_grant_types?: Array<ApplicationGrantTypeEntity>;
    /**
     * 
     * @type {Array<ApplicationGrantTypeEntity>}
     * @memberof ApplicationTypeEntity
     */
    default_grant_types?: Array<ApplicationGrantTypeEntity>;
    /**
     * 
     * @type {Array<ApplicationGrantTypeEntity>}
     * @memberof ApplicationTypeEntity
     */
    mandatory_grant_types?: Array<ApplicationGrantTypeEntity>;
}

export function ApplicationTypeEntityFromJSON(json: any): ApplicationTypeEntity {
    return ApplicationTypeEntityFromJSONTyped(json, false);
}

export function ApplicationTypeEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationTypeEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'requires_redirect_uris': !exists(json, 'requires_redirect_uris') ? undefined : json['requires_redirect_uris'],
        'allowed_grant_types': !exists(json, 'allowed_grant_types') ? undefined : ((json['allowed_grant_types'] as Array<any>).map(ApplicationGrantTypeEntityFromJSON)),
        'default_grant_types': !exists(json, 'default_grant_types') ? undefined : ((json['default_grant_types'] as Array<any>).map(ApplicationGrantTypeEntityFromJSON)),
        'mandatory_grant_types': !exists(json, 'mandatory_grant_types') ? undefined : ((json['mandatory_grant_types'] as Array<any>).map(ApplicationGrantTypeEntityFromJSON)),
    };
}

export function ApplicationTypeEntityToJSON(value?: ApplicationTypeEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'description': value.description,
        'requires_redirect_uris': value.requires_redirect_uris,
        'allowed_grant_types': value.allowed_grant_types === undefined ? undefined : ((value.allowed_grant_types as Array<any>).map(ApplicationGrantTypeEntityToJSON)),
        'default_grant_types': value.default_grant_types === undefined ? undefined : ((value.default_grant_types as Array<any>).map(ApplicationGrantTypeEntityToJSON)),
        'mandatory_grant_types': value.mandatory_grant_types === undefined ? undefined : ((value.mandatory_grant_types as Array<any>).map(ApplicationGrantTypeEntityToJSON)),
    };
}


