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
    UserConfig,
    UserConfigFromJSON,
    UserConfigFromJSONTyped,
    UserConfigToJSON,
    UserLinks,
    UserLinksFromJSON,
    UserLinksFromJSONTyped,
    UserLinksToJSON,
    UserPermissions,
    UserPermissionsFromJSON,
    UserPermissionsFromJSONTyped,
    UserPermissionsToJSON,
} from './';

/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * Unique identifier of a user.
     * @type {string}
     * @memberof User
     */
    id?: string;
    /**
     * Unique reference if user comes from external source. Use for search only.
     * @type {string}
     * @memberof User
     */
    reference?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    first_name?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    last_name?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    display_name?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    email?: string;
    /**
     * True if the user can edit the MyAccount information
     * @type {boolean}
     * @memberof User
     */
    editable_profile?: boolean;
    /**
     * 
     * @type {UserPermissions}
     * @memberof User
     */
    permissions?: UserPermissions;
    /**
     * Values for CustomUserFields
     * @type {{ [key: string]: any; }}
     * @memberof User
     */
    customFields?: { [key: string]: any; };
    /**
     * 
     * @type {UserConfig}
     * @memberof User
     */
    config?: UserConfig;
    /**
     * 
     * @type {UserLinks}
     * @memberof User
     */
    _links?: UserLinks;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'reference': !exists(json, 'reference') ? undefined : json['reference'],
        'first_name': !exists(json, 'first_name') ? undefined : json['first_name'],
        'last_name': !exists(json, 'last_name') ? undefined : json['last_name'],
        'display_name': !exists(json, 'display_name') ? undefined : json['display_name'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'editable_profile': !exists(json, 'editable_profile') ? undefined : json['editable_profile'],
        'permissions': !exists(json, 'permissions') ? undefined : UserPermissionsFromJSON(json['permissions']),
        'customFields': !exists(json, 'customFields') ? undefined : json['customFields'],
        'config': !exists(json, 'config') ? undefined : UserConfigFromJSON(json['config']),
        '_links': !exists(json, '_links') ? undefined : UserLinksFromJSON(json['_links']),
    };
}

export function UserToJSON(value?: User | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'reference': value.reference,
        'first_name': value.first_name,
        'last_name': value.last_name,
        'display_name': value.display_name,
        'email': value.email,
        'editable_profile': value.editable_profile,
        'permissions': UserPermissionsToJSON(value.permissions),
        'customFields': value.customFields,
        'config': UserConfigToJSON(value.config),
        '_links': UserLinksToJSON(value._links),
    };
}


