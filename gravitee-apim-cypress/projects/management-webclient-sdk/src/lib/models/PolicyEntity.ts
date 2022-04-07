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
    PluginEntity,
    PluginEntityFromJSON,
    PluginEntityFromJSONTyped,
    PluginEntityToJSON,
    PolicyDevelopmentEntity,
    PolicyDevelopmentEntityFromJSON,
    PolicyDevelopmentEntityFromJSONTyped,
    PolicyDevelopmentEntityToJSON,
    PolicyType,
    PolicyTypeFromJSON,
    PolicyTypeFromJSONTyped,
    PolicyTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface PolicyEntity
 */
export interface PolicyEntity {
    /**
     * 
     * @type {string}
     * @memberof PolicyEntity
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof PolicyEntity
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PolicyEntity
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof PolicyEntity
     */
    category?: string;
    /**
     * 
     * @type {string}
     * @memberof PolicyEntity
     */
    version?: string;
    /**
     * 
     * @type {PolicyType}
     * @memberof PolicyEntity
     */
    type?: PolicyType;
    /**
     * 
     * @type {PluginEntity}
     * @memberof PolicyEntity
     */
    plugin?: PluginEntity;
    /**
     * 
     * @type {PolicyDevelopmentEntity}
     * @memberof PolicyEntity
     */
    dev?: PolicyDevelopmentEntity;
}

export function PolicyEntityFromJSON(json: any): PolicyEntity {
    return PolicyEntityFromJSONTyped(json, false);
}

export function PolicyEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): PolicyEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'category': !exists(json, 'category') ? undefined : json['category'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'type': !exists(json, 'type') ? undefined : PolicyTypeFromJSON(json['type']),
        'plugin': !exists(json, 'plugin') ? undefined : PluginEntityFromJSON(json['plugin']),
        'dev': !exists(json, 'dev') ? undefined : PolicyDevelopmentEntityFromJSON(json['dev']),
    };
}

export function PolicyEntityToJSON(value?: PolicyEntity | null): any {
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
        'category': value.category,
        'version': value.version,
        'type': PolicyTypeToJSON(value.type),
        'plugin': PluginEntityToJSON(value.plugin),
        'dev': PolicyDevelopmentEntityToJSON(value.dev),
    };
}


