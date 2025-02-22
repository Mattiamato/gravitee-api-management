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
 * @interface DashboardEntity
 */
export interface DashboardEntity {
    /**
     * 
     * @type {string}
     * @memberof DashboardEntity
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof DashboardEntity
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof DashboardEntity
     */
    order?: number;
    /**
     * 
     * @type {boolean}
     * @memberof DashboardEntity
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DashboardEntity
     */
    definition?: string;
    /**
     * 
     * @type {string}
     * @memberof DashboardEntity
     */
    reference_type?: string;
    /**
     * 
     * @type {string}
     * @memberof DashboardEntity
     */
    reference_id?: string;
    /**
     * 
     * @type {string}
     * @memberof DashboardEntity
     */
    query_filter?: string;
    /**
     * 
     * @type {Date}
     * @memberof DashboardEntity
     */
    created_at?: Date;
    /**
     * 
     * @type {Date}
     * @memberof DashboardEntity
     */
    updated_at?: Date;
}

export function DashboardEntityFromJSON(json: any): DashboardEntity {
    return DashboardEntityFromJSONTyped(json, false);
}

export function DashboardEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): DashboardEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'definition': !exists(json, 'definition') ? undefined : json['definition'],
        'reference_type': !exists(json, 'reference_type') ? undefined : json['reference_type'],
        'reference_id': !exists(json, 'reference_id') ? undefined : json['reference_id'],
        'query_filter': !exists(json, 'query_filter') ? undefined : json['query_filter'],
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function DashboardEntityToJSON(value?: DashboardEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'order': value.order,
        'enabled': value.enabled,
        'definition': value.definition,
        'reference_type': value.reference_type,
        'reference_id': value.reference_id,
        'query_filter': value.query_filter,
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'updated_at': value.updated_at === undefined ? undefined : (value.updated_at.toISOString()),
    };
}


