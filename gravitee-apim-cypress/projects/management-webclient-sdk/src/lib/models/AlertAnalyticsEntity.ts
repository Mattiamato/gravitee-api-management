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
    AlertTriggerAnalytics,
    AlertTriggerAnalyticsFromJSON,
    AlertTriggerAnalyticsFromJSONTyped,
    AlertTriggerAnalyticsToJSON,
} from './';

/**
 * 
 * @export
 * @interface AlertAnalyticsEntity
 */
export interface AlertAnalyticsEntity {
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof AlertAnalyticsEntity
     */
    bySeverity?: { [key: string]: number; };
    /**
     * 
     * @type {Array<AlertTriggerAnalytics>}
     * @memberof AlertAnalyticsEntity
     */
    alerts?: Array<AlertTriggerAnalytics>;
}

export function AlertAnalyticsEntityFromJSON(json: any): AlertAnalyticsEntity {
    return AlertAnalyticsEntityFromJSONTyped(json, false);
}

export function AlertAnalyticsEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlertAnalyticsEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bySeverity': !exists(json, 'bySeverity') ? undefined : json['bySeverity'],
        'alerts': !exists(json, 'alerts') ? undefined : ((json['alerts'] as Array<any>).map(AlertTriggerAnalyticsFromJSON)),
    };
}

export function AlertAnalyticsEntityToJSON(value?: AlertAnalyticsEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bySeverity': value.bySeverity,
        'alerts': value.alerts === undefined ? undefined : ((value.alerts as Array<any>).map(AlertTriggerAnalyticsToJSON)),
    };
}


