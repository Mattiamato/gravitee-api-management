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
 * @interface TenantEntity
 */
export interface TenantEntity {
    /**
     * 
     * @type {string}
     * @memberof TenantEntity
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof TenantEntity
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TenantEntity
     */
    description?: string;
}

export function TenantEntityFromJSON(json: any): TenantEntity {
    return TenantEntityFromJSONTyped(json, false);
}

export function TenantEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): TenantEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function TenantEntityToJSON(value?: TenantEntity | null): any {
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
    };
}


