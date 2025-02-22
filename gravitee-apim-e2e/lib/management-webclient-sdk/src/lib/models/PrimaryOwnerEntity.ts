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
 * The user with role PRIMARY_OWNER on this API.
 * @export
 * @interface PrimaryOwnerEntity
 */
export interface PrimaryOwnerEntity {
    /**
     * The user or group id.
     * @type {string}
     * @memberof PrimaryOwnerEntity
     */
    id?: string;
    /**
     * The user or group email.
     * @type {string}
     * @memberof PrimaryOwnerEntity
     */
    email?: string;
    /**
     * The user or group display name.
     * @type {string}
     * @memberof PrimaryOwnerEntity
     */
    displayName?: string;
    /**
     * The primary owner type
     * @type {string}
     * @memberof PrimaryOwnerEntity
     */
    type?: string;
}

export function PrimaryOwnerEntityFromJSON(json: any): PrimaryOwnerEntity {
    return PrimaryOwnerEntityFromJSONTyped(json, false);
}

export function PrimaryOwnerEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrimaryOwnerEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function PrimaryOwnerEntityToJSON(value?: PrimaryOwnerEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'email': value.email,
        'displayName': value.displayName,
        'type': value.type,
    };
}


