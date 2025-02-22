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
 * @interface Consumer
 */
export interface Consumer {
    /**
     * 
     * @type {string}
     * @memberof Consumer
     */
    consumerType?: ConsumerConsumerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Consumer
     */
    consumerId?: string;
}

export function ConsumerFromJSON(json: any): Consumer {
    return ConsumerFromJSONTyped(json, false);
}

export function ConsumerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Consumer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'consumerType': !exists(json, 'consumerType') ? undefined : json['consumerType'],
        'consumerId': !exists(json, 'consumerId') ? undefined : json['consumerId'],
    };
}

export function ConsumerToJSON(value?: Consumer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'consumerType': value.consumerType,
        'consumerId': value.consumerId,
    };
}

/**
* @export
* @enum {string}
*/
export enum ConsumerConsumerTypeEnum {
    TAG = 'TAG'
}


