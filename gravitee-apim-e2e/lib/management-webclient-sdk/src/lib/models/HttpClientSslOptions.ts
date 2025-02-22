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
    KeyStore,
    KeyStoreFromJSON,
    KeyStoreFromJSONTyped,
    KeyStoreToJSON,
    TrustStore,
    TrustStoreFromJSON,
    TrustStoreFromJSONTyped,
    TrustStoreToJSON,
} from './';

/**
 * 
 * @export
 * @interface HttpClientSslOptions
 */
export interface HttpClientSslOptions {
    /**
     * 
     * @type {boolean}
     * @memberof HttpClientSslOptions
     */
    trustAll?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof HttpClientSslOptions
     */
    hostnameVerifier?: boolean;
    /**
     * 
     * @type {TrustStore}
     * @memberof HttpClientSslOptions
     */
    trustStore?: TrustStore;
    /**
     * 
     * @type {KeyStore}
     * @memberof HttpClientSslOptions
     */
    keyStore?: KeyStore;
}

export function HttpClientSslOptionsFromJSON(json: any): HttpClientSslOptions {
    return HttpClientSslOptionsFromJSONTyped(json, false);
}

export function HttpClientSslOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): HttpClientSslOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'trustAll': !exists(json, 'trustAll') ? undefined : json['trustAll'],
        'hostnameVerifier': !exists(json, 'hostnameVerifier') ? undefined : json['hostnameVerifier'],
        'trustStore': !exists(json, 'trustStore') ? undefined : TrustStoreFromJSON(json['trustStore']),
        'keyStore': !exists(json, 'keyStore') ? undefined : KeyStoreFromJSON(json['keyStore']),
    };
}

export function HttpClientSslOptionsToJSON(value?: HttpClientSslOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'trustAll': value.trustAll,
        'hostnameVerifier': value.hostnameVerifier,
        'trustStore': TrustStoreToJSON(value.trustStore),
        'keyStore': KeyStoreToJSON(value.keyStore),
    };
}


