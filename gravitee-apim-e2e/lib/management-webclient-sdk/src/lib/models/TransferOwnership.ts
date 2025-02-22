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
    MembershipMemberType,
    MembershipMemberTypeFromJSON,
    MembershipMemberTypeFromJSONTyped,
    MembershipMemberTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface TransferOwnership
 */
export interface TransferOwnership {
    /**
     * 
     * @type {string}
     * @memberof TransferOwnership
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferOwnership
     */
    reference?: string;
    /**
     * 
     * @type {MembershipMemberType}
     * @memberof TransferOwnership
     */
    type?: MembershipMemberType;
    /**
     * 
     * @type {string}
     * @memberof TransferOwnership
     */
    role?: string;
}

export function TransferOwnershipFromJSON(json: any): TransferOwnership {
    return TransferOwnershipFromJSONTyped(json, false);
}

export function TransferOwnershipFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferOwnership {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'reference': !exists(json, 'reference') ? undefined : json['reference'],
        'type': !exists(json, 'type') ? undefined : MembershipMemberTypeFromJSON(json['type']),
        'role': !exists(json, 'role') ? undefined : json['role'],
    };
}

export function TransferOwnershipToJSON(value?: TransferOwnership | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'reference': value.reference,
        'type': MembershipMemberTypeToJSON(value.type),
        'role': value.role,
    };
}


