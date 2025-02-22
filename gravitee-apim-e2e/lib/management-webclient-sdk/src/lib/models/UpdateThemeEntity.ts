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
    ThemeDefinition,
    ThemeDefinitionFromJSON,
    ThemeDefinitionFromJSONTyped,
    ThemeDefinitionToJSON,
} from './';

/**
 * 
 * @export
 * @interface UpdateThemeEntity
 */
export interface UpdateThemeEntity {
    /**
     * 
     * @type {string}
     * @memberof UpdateThemeEntity
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateThemeEntity
     */
    name: string;
    /**
     * 
     * @type {ThemeDefinition}
     * @memberof UpdateThemeEntity
     */
    definition: ThemeDefinition;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateThemeEntity
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UpdateThemeEntity
     */
    logo?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateThemeEntity
     */
    backgroundImage?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateThemeEntity
     */
    optionalLogo?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateThemeEntity
     */
    favicon?: string;
}

export function UpdateThemeEntityFromJSON(json: any): UpdateThemeEntity {
    return UpdateThemeEntityFromJSONTyped(json, false);
}

export function UpdateThemeEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateThemeEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
        'definition': ThemeDefinitionFromJSON(json['definition']),
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'logo': !exists(json, 'logo') ? undefined : json['logo'],
        'backgroundImage': !exists(json, 'backgroundImage') ? undefined : json['backgroundImage'],
        'optionalLogo': !exists(json, 'optionalLogo') ? undefined : json['optionalLogo'],
        'favicon': !exists(json, 'favicon') ? undefined : json['favicon'],
    };
}

export function UpdateThemeEntityToJSON(value?: UpdateThemeEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'definition': ThemeDefinitionToJSON(value.definition),
        'enabled': value.enabled,
        'logo': value.logo,
        'backgroundImage': value.backgroundImage,
        'optionalLogo': value.optionalLogo,
        'favicon': value.favicon,
    };
}


