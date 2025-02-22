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
    AuditEntity,
    AuditEntityFromJSON,
    AuditEntityFromJSONTyped,
    AuditEntityToJSON,
} from './';

/**
 * 
 * @export
 * @interface MetadataPageAuditEntity
 */
export interface MetadataPageAuditEntity {
    /**
     * 
     * @type {Array<AuditEntity>}
     * @memberof MetadataPageAuditEntity
     */
    content?: Array<AuditEntity>;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof MetadataPageAuditEntity
     */
    metadata?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof MetadataPageAuditEntity
     */
    pageNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof MetadataPageAuditEntity
     */
    pageElements?: number;
    /**
     * 
     * @type {number}
     * @memberof MetadataPageAuditEntity
     */
    totalElements?: number;
}

export function MetadataPageAuditEntityFromJSON(json: any): MetadataPageAuditEntity {
    return MetadataPageAuditEntityFromJSONTyped(json, false);
}

export function MetadataPageAuditEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetadataPageAuditEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'content': !exists(json, 'content') ? undefined : ((json['content'] as Array<any>).map(AuditEntityFromJSON)),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'pageNumber': !exists(json, 'pageNumber') ? undefined : json['pageNumber'],
        'pageElements': !exists(json, 'pageElements') ? undefined : json['pageElements'],
        'totalElements': !exists(json, 'totalElements') ? undefined : json['totalElements'],
    };
}

export function MetadataPageAuditEntityToJSON(value?: MetadataPageAuditEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'content': value.content === undefined ? undefined : ((value.content as Array<any>).map(AuditEntityToJSON)),
        'metadata': value.metadata,
        'pageNumber': value.pageNumber,
        'pageElements': value.pageElements,
        'totalElements': value.totalElements,
    };
}


