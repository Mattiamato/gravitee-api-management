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
 * @interface JsonPatch
 */
export interface JsonPatch {
    /**
     * 
     * @type {string}
     * @memberof JsonPatch
     */
    jsonPath: string;
    /**
     * 
     * @type {object}
     * @memberof JsonPatch
     */
    value?: object;
    /**
     * 
     * @type {string}
     * @memberof JsonPatch
     */
    operation?: JsonPatchOperationEnum;
}

export function JsonPatchFromJSON(json: any): JsonPatch {
    return JsonPatchFromJSONTyped(json, false);
}

export function JsonPatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): JsonPatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'jsonPath': json['jsonPath'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'operation': !exists(json, 'operation') ? undefined : json['operation'],
    };
}

export function JsonPatchToJSON(value?: JsonPatch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'jsonPath': value.jsonPath,
        'value': value.value,
        'operation': value.operation,
    };
}

/**
* @export
* @enum {string}
*/
export enum JsonPatchOperationEnum {
    ADD = 'ADD',
    REMOVE = 'REMOVE',
    REPLACE = 'REPLACE',
    TEST = 'TEST'
}


