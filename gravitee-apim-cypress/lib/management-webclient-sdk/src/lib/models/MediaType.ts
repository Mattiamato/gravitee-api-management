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
    MediaTypeCharset,
    MediaTypeCharsetFromJSON,
    MediaTypeCharsetFromJSONTyped,
    MediaTypeCharsetToJSON,
} from './';

/**
 * 
 * @export
 * @interface MediaType
 */
export interface MediaType {
    /**
     * 
     * @type {string}
     * @memberof MediaType
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof MediaType
     */
    subtype?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof MediaType
     */
    parameters?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof MediaType
     */
    QUALITY_FACTOR_PARAMETER?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MediaType
     */
    wildcardSubtype?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MediaType
     */
    wildcardType?: boolean;
    /**
     * 
     * @type {number}
     * @memberof MediaType
     */
    qualityFactor?: number;
    /**
     * 
     * @type {MediaTypeCharset}
     * @memberof MediaType
     */
    charset?: MediaTypeCharset;
    /**
     * 
     * @type {boolean}
     * @memberof MediaType
     */
    concrete?: boolean;
}

export function MediaTypeFromJSON(json: any): MediaType {
    return MediaTypeFromJSONTyped(json, false);
}

export function MediaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MediaType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'subtype': !exists(json, 'subtype') ? undefined : json['subtype'],
        'parameters': !exists(json, 'parameters') ? undefined : json['parameters'],
        'QUALITY_FACTOR_PARAMETER': !exists(json, 'QUALITY_FACTOR_PARAMETER') ? undefined : json['QUALITY_FACTOR_PARAMETER'],
        'wildcardSubtype': !exists(json, 'wildcardSubtype') ? undefined : json['wildcardSubtype'],
        'wildcardType': !exists(json, 'wildcardType') ? undefined : json['wildcardType'],
        'qualityFactor': !exists(json, 'qualityFactor') ? undefined : json['qualityFactor'],
        'charset': !exists(json, 'charset') ? undefined : MediaTypeCharsetFromJSON(json['charset']),
        'concrete': !exists(json, 'concrete') ? undefined : json['concrete'],
    };
}

export function MediaTypeToJSON(value?: MediaType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'subtype': value.subtype,
        'parameters': value.parameters,
        'QUALITY_FACTOR_PARAMETER': value.QUALITY_FACTOR_PARAMETER,
        'wildcardSubtype': value.wildcardSubtype,
        'wildcardType': value.wildcardType,
        'qualityFactor': value.qualityFactor,
        'charset': MediaTypeCharsetToJSON(value.charset),
        'concrete': value.concrete,
    };
}


