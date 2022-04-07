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
    Enabled,
    EnabledFromJSON,
    EnabledFromJSONTyped,
    EnabledToJSON,
    PortalAnalytics,
    PortalAnalyticsFromJSON,
    PortalAnalyticsFromJSONTyped,
    PortalAnalyticsToJSON,
    PortalApis,
    PortalApisFromJSON,
    PortalApisFromJSONTyped,
    PortalApisToJSON,
    PortalRating,
    PortalRatingFromJSON,
    PortalRatingFromJSONTyped,
    PortalRatingToJSON,
    PortalUploadMedia,
    PortalUploadMediaFromJSON,
    PortalUploadMediaFromJSONTyped,
    PortalUploadMediaToJSON,
    PortalUserCreation,
    PortalUserCreationFromJSON,
    PortalUserCreationFromJSONTyped,
    PortalUserCreationToJSON,
} from './';

/**
 * 
 * @export
 * @interface Portal
 */
export interface Portal {
    /**
     * 
     * @type {string}
     * @memberof Portal
     */
    entrypoint?: string;
    /**
     * 
     * @type {string}
     * @memberof Portal
     */
    apikeyHeader?: string;
    /**
     * 
     * @type {Enabled}
     * @memberof Portal
     */
    support?: Enabled;
    /**
     * 
     * @type {string}
     * @memberof Portal
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof Portal
     */
    homepageTitle?: string;
    /**
     * 
     * @type {PortalApis}
     * @memberof Portal
     */
    apis?: PortalApis;
    /**
     * 
     * @type {PortalAnalytics}
     * @memberof Portal
     */
    analytics?: PortalAnalytics;
    /**
     * 
     * @type {PortalRating}
     * @memberof Portal
     */
    rating?: PortalRating;
    /**
     * 
     * @type {PortalUserCreation}
     * @memberof Portal
     */
    userCreation?: PortalUserCreation;
    /**
     * 
     * @type {PortalUploadMedia}
     * @memberof Portal
     */
    uploadMedia?: PortalUploadMedia;
}

export function PortalFromJSON(json: any): Portal {
    return PortalFromJSONTyped(json, false);
}

export function PortalFromJSONTyped(json: any, ignoreDiscriminator: boolean): Portal {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'entrypoint': !exists(json, 'entrypoint') ? undefined : json['entrypoint'],
        'apikeyHeader': !exists(json, 'apikeyHeader') ? undefined : json['apikeyHeader'],
        'support': !exists(json, 'support') ? undefined : EnabledFromJSON(json['support']),
        'url': !exists(json, 'url') ? undefined : json['url'],
        'homepageTitle': !exists(json, 'homepageTitle') ? undefined : json['homepageTitle'],
        'apis': !exists(json, 'apis') ? undefined : PortalApisFromJSON(json['apis']),
        'analytics': !exists(json, 'analytics') ? undefined : PortalAnalyticsFromJSON(json['analytics']),
        'rating': !exists(json, 'rating') ? undefined : PortalRatingFromJSON(json['rating']),
        'userCreation': !exists(json, 'userCreation') ? undefined : PortalUserCreationFromJSON(json['userCreation']),
        'uploadMedia': !exists(json, 'uploadMedia') ? undefined : PortalUploadMediaFromJSON(json['uploadMedia']),
    };
}

export function PortalToJSON(value?: Portal | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'entrypoint': value.entrypoint,
        'apikeyHeader': value.apikeyHeader,
        'support': EnabledToJSON(value.support),
        'url': value.url,
        'homepageTitle': value.homepageTitle,
        'apis': PortalApisToJSON(value.apis),
        'analytics': PortalAnalyticsToJSON(value.analytics),
        'rating': PortalRatingToJSON(value.rating),
        'userCreation': PortalUserCreationToJSON(value.userCreation),
        'uploadMedia': PortalUploadMediaToJSON(value.uploadMedia),
    };
}


