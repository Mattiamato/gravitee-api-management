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
/**
 * Definition of addition user registration fields
 * @export
 * @interface CustomUserFields
 */
export interface CustomUserFields {
    /**
     * The field identifier.
     * @type {string}
     * @memberof CustomUserFields
     */
    key?: string;
    /**
     * The default field label.
     * @type {string}
     * @memberof CustomUserFields
     */
    label?: string;
    /**
     * The field is mandatory
     * @type {boolean}
     * @memberof CustomUserFields
     */
    required?: boolean;
    /**
     * List of authorized values for the field
     * @type {Array<string>}
     * @memberof CustomUserFields
     */
    values?: Array<string>;
}

export function CustomUserFieldsFromJSON(json: any): CustomUserFields {
    return CustomUserFieldsFromJSONTyped(json, false);
}

export function CustomUserFieldsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomUserFields {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': !exists(json, 'key') ? undefined : json['key'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'required': !exists(json, 'required') ? undefined : json['required'],
        'values': !exists(json, 'values') ? undefined : json['values'],
    };
}

export function CustomUserFieldsToJSON(value?: CustomUserFields | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': value.key,
        'label': value.label,
        'required': value.required,
        'values': value.values,
    };
}


