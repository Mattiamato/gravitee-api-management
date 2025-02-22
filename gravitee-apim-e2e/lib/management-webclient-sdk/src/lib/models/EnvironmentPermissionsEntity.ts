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
 * @interface EnvironmentPermissionsEntity
 */
export interface EnvironmentPermissionsEntity {
    /**
     * 
     * @type {string}
     * @memberof EnvironmentPermissionsEntity
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof EnvironmentPermissionsEntity
     */
    hrids?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof EnvironmentPermissionsEntity
     */
    name: string;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof EnvironmentPermissionsEntity
     */
    permissions?: { [key: string]: Array<string>; };
}

export function EnvironmentPermissionsEntityFromJSON(json: any): EnvironmentPermissionsEntity {
    return EnvironmentPermissionsEntityFromJSONTyped(json, false);
}

export function EnvironmentPermissionsEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnvironmentPermissionsEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'hrids': !exists(json, 'hrids') ? undefined : json['hrids'],
        'name': json['name'],
        'permissions': !exists(json, 'permissions') ? undefined : json['permissions'],
    };
}

export function EnvironmentPermissionsEntityToJSON(value?: EnvironmentPermissionsEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'hrids': value.hrids,
        'name': value.name,
        'permissions': value.permissions,
    };
}


