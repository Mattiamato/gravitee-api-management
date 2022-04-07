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
 * @interface NewPreRegisterUserEntity
 */
export interface NewPreRegisterUserEntity {
    /**
     * 
     * @type {string}
     * @memberof NewPreRegisterUserEntity
     */
    firstname?: string;
    /**
     * 
     * @type {string}
     * @memberof NewPreRegisterUserEntity
     */
    lastname?: string;
    /**
     * 
     * @type {string}
     * @memberof NewPreRegisterUserEntity
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof NewPreRegisterUserEntity
     */
    source?: string;
    /**
     * 
     * @type {string}
     * @memberof NewPreRegisterUserEntity
     */
    picture?: string;
    /**
     * 
     * @type {string}
     * @memberof NewPreRegisterUserEntity
     */
    sourceId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof NewPreRegisterUserEntity
     */
    newsletter?: boolean;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof NewPreRegisterUserEntity
     */
    customFields?: { [key: string]: object; };
    /**
     * 
     * @type {boolean}
     * @memberof NewPreRegisterUserEntity
     */
    service?: boolean;
}

export function NewPreRegisterUserEntityFromJSON(json: any): NewPreRegisterUserEntity {
    return NewPreRegisterUserEntityFromJSONTyped(json, false);
}

export function NewPreRegisterUserEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewPreRegisterUserEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstname': !exists(json, 'firstname') ? undefined : json['firstname'],
        'lastname': !exists(json, 'lastname') ? undefined : json['lastname'],
        'email': json['email'],
        'source': !exists(json, 'source') ? undefined : json['source'],
        'picture': !exists(json, 'picture') ? undefined : json['picture'],
        'sourceId': !exists(json, 'sourceId') ? undefined : json['sourceId'],
        'newsletter': !exists(json, 'newsletter') ? undefined : json['newsletter'],
        'customFields': !exists(json, 'customFields') ? undefined : json['customFields'],
        'service': !exists(json, 'service') ? undefined : json['service'],
    };
}

export function NewPreRegisterUserEntityToJSON(value?: NewPreRegisterUserEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'firstname': value.firstname,
        'lastname': value.lastname,
        'email': value.email,
        'source': value.source,
        'picture': value.picture,
        'sourceId': value.sourceId,
        'newsletter': value.newsletter,
        'customFields': value.customFields,
        'service': value.service,
    };
}


