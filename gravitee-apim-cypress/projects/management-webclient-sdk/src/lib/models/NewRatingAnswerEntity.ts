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
 * @interface NewRatingAnswerEntity
 */
export interface NewRatingAnswerEntity {
    /**
     * 
     * @type {string}
     * @memberof NewRatingAnswerEntity
     */
    ratingId?: string;
    /**
     * 
     * @type {string}
     * @memberof NewRatingAnswerEntity
     */
    comment?: string;
}

export function NewRatingAnswerEntityFromJSON(json: any): NewRatingAnswerEntity {
    return NewRatingAnswerEntityFromJSONTyped(json, false);
}

export function NewRatingAnswerEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewRatingAnswerEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ratingId': !exists(json, 'ratingId') ? undefined : json['ratingId'],
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
    };
}

export function NewRatingAnswerEntityToJSON(value?: NewRatingAnswerEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ratingId': value.ratingId,
        'comment': value.comment,
    };
}


