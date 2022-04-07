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
 * @interface MessageRecipientEntity
 */
export interface MessageRecipientEntity {
    /**
     * 
     * @type {string}
     * @memberof MessageRecipientEntity
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof MessageRecipientEntity
     */
    role_scope?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof MessageRecipientEntity
     */
    role_value?: Array<string>;
}

export function MessageRecipientEntityFromJSON(json: any): MessageRecipientEntity {
    return MessageRecipientEntityFromJSONTyped(json, false);
}

export function MessageRecipientEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageRecipientEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': !exists(json, 'url') ? undefined : json['url'],
        'role_scope': !exists(json, 'role_scope') ? undefined : json['role_scope'],
        'role_value': !exists(json, 'role_value') ? undefined : json['role_value'],
    };
}

export function MessageRecipientEntityToJSON(value?: MessageRecipientEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'url': value.url,
        'role_scope': value.role_scope,
        'role_value': value.role_value,
    };
}


