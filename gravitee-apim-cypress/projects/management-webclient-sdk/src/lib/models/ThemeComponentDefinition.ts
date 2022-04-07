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
    ThemeCssDefinition,
    ThemeCssDefinitionFromJSON,
    ThemeCssDefinitionFromJSONTyped,
    ThemeCssDefinitionToJSON,
} from './';

/**
 * 
 * @export
 * @interface ThemeComponentDefinition
 */
export interface ThemeComponentDefinition {
    /**
     * 
     * @type {string}
     * @memberof ThemeComponentDefinition
     */
    name?: string;
    /**
     * 
     * @type {Array<ThemeCssDefinition>}
     * @memberof ThemeComponentDefinition
     */
    css?: Array<ThemeCssDefinition>;
}

export function ThemeComponentDefinitionFromJSON(json: any): ThemeComponentDefinition {
    return ThemeComponentDefinitionFromJSONTyped(json, false);
}

export function ThemeComponentDefinitionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThemeComponentDefinition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'css': !exists(json, 'css') ? undefined : ((json['css'] as Array<any>).map(ThemeCssDefinitionFromJSON)),
    };
}

export function ThemeComponentDefinitionToJSON(value?: ThemeComponentDefinition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'css': value.css === undefined ? undefined : ((value.css as Array<any>).map(ThemeCssDefinitionToJSON)),
    };
}


