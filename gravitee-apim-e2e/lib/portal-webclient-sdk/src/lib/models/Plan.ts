/* tslint:disable */
/* eslint-disable */
/**
 * Gravitee.io Portal Rest API
 * API dedicated to the devportal part of Gravitee
 *
 * Contact: contact@graviteesource.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Plan
 */
export interface Plan {
    /**
     * Unique identifier of a plan.
     * @type {string}
     * @memberof Plan
     */
    id: string;
    /**
     * Name of the plan.
     * @type {string}
     * @memberof Plan
     */
    name: string;
    /**
     * Security used with this plan.
     * @type {string}
     * @memberof Plan
     */
    security: PlanSecurityEnum;
    /**
     * Description of the plan.
     * @type {string}
     * @memberof Plan
     */
    description: string;
    /**
     * List of additionnal terms to describe the plan.
     * @type {Array<string>}
     * @memberof Plan
     */
    characteristics?: Array<string>;
    /**
     * Type of validation for subscription requests.
     * @type {string}
     * @memberof Plan
     */
    validation: PlanValidationEnum;
    /**
     * Priority order
     * @type {number}
     * @memberof Plan
     */
    order: number;
    /**
     * True if a comment is required when a subscription is created.
     * @type {boolean}
     * @memberof Plan
     */
    comment_required: boolean;
    /**
     * Content of the message sent to a user creating a subscription.
     * @type {string}
     * @memberof Plan
     */
    comment_question?: string;
    /**
     * The  page reference with general conditions of use for the API.
     * @type {string}
     * @memberof Plan
     */
    general_conditions?: string;
}

export function PlanFromJSON(json: any): Plan {
    return PlanFromJSONTyped(json, false);
}

export function PlanFromJSONTyped(json: any, ignoreDiscriminator: boolean): Plan {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'security': json['security'],
        'description': json['description'],
        'characteristics': !exists(json, 'characteristics') ? undefined : json['characteristics'],
        'validation': json['validation'],
        'order': json['order'],
        'comment_required': json['comment_required'],
        'comment_question': !exists(json, 'comment_question') ? undefined : json['comment_question'],
        'general_conditions': !exists(json, 'general_conditions') ? undefined : json['general_conditions'],
    };
}

export function PlanToJSON(value?: Plan | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'security': value.security,
        'description': value.description,
        'characteristics': value.characteristics,
        'validation': value.validation,
        'order': value.order,
        'comment_required': value.comment_required,
        'comment_question': value.comment_question,
        'general_conditions': value.general_conditions,
    };
}

/**
* @export
* @enum {string}
*/
export enum PlanSecurityEnum {
    APIKEY = 'API_KEY',
    KEYLESS = 'KEY_LESS',
    JWT = 'JWT',
    OAUTH2 = 'OAUTH2'
}
/**
* @export
* @enum {string}
*/
export enum PlanValidationEnum {
    AUTO = 'AUTO',
    MANUAL = 'MANUAL'
}


