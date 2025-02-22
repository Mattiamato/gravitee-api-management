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
    JKSKeyStoreAllOf,
    JKSKeyStoreAllOfFromJSON,
    JKSKeyStoreAllOfFromJSONTyped,
    JKSKeyStoreAllOfToJSON,
    KeyStore,
    KeyStoreFromJSON,
    KeyStoreFromJSONTyped,
    KeyStoreToJSON,
} from './';

/**
 * 
 * @export
 * @interface JKSKeyStore
 */
export interface JKSKeyStore extends KeyStore {
    /**
     * 
     * @type {string}
     * @memberof JKSKeyStore
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof JKSKeyStore
     */
    content?: string;
    /**
     * 
     * @type {string}
     * @memberof JKSKeyStore
     */
    password?: string;
}

export function JKSKeyStoreFromJSON(json: any): JKSKeyStore {
    return JKSKeyStoreFromJSONTyped(json, false);
}

export function JKSKeyStoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): JKSKeyStore {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...KeyStoreFromJSONTyped(json, ignoreDiscriminator),
        'path': !exists(json, 'path') ? undefined : json['path'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'password': !exists(json, 'password') ? undefined : json['password'],
    };
}

export function JKSKeyStoreToJSON(value?: JKSKeyStore | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...KeyStoreToJSON(value),
        'path': value.path,
        'content': value.content,
        'password': value.password,
    };
}



