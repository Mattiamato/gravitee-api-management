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
    Flow,
    FlowFromJSON,
    FlowFromJSONTyped,
    FlowToJSON,
} from './';

/**
 * 
 * @export
 * @interface OrganizationEntity
 */
export interface OrganizationEntity {
    /**
     * 
     * @type {string}
     * @memberof OrganizationEntity
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof OrganizationEntity
     */
    cockpitId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof OrganizationEntity
     */
    hrids?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof OrganizationEntity
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof OrganizationEntity
     */
    description?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof OrganizationEntity
     */
    domainRestrictions?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof OrganizationEntity
     */
    flowMode?: OrganizationEntityFlowModeEnum;
    /**
     * 
     * @type {Array<Flow>}
     * @memberof OrganizationEntity
     */
    flows?: Array<Flow>;
}

export function OrganizationEntityFromJSON(json: any): OrganizationEntity {
    return OrganizationEntityFromJSONTyped(json, false);
}

export function OrganizationEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'cockpitId': !exists(json, 'cockpitId') ? undefined : json['cockpitId'],
        'hrids': !exists(json, 'hrids') ? undefined : json['hrids'],
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'domainRestrictions': !exists(json, 'domainRestrictions') ? undefined : json['domainRestrictions'],
        'flowMode': !exists(json, 'flowMode') ? undefined : json['flowMode'],
        'flows': !exists(json, 'flows') ? undefined : ((json['flows'] as Array<any>).map(FlowFromJSON)),
    };
}

export function OrganizationEntityToJSON(value?: OrganizationEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'cockpitId': value.cockpitId,
        'hrids': value.hrids,
        'name': value.name,
        'description': value.description,
        'domainRestrictions': value.domainRestrictions,
        'flowMode': value.flowMode,
        'flows': value.flows === undefined ? undefined : ((value.flows as Array<any>).map(FlowToJSON)),
    };
}

/**
* @export
* @enum {string}
*/
export enum OrganizationEntityFlowModeEnum {
    DEFAULT = 'DEFAULT',
    BESTMATCH = 'BEST_MATCH'
}


