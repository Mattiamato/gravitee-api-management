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
 * @interface ApplicationLinks
 */
export interface ApplicationLinks {
    /**
     * 
     * @type {string}
     * @memberof ApplicationLinks
     */
    self?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationLinks
     */
    members?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationLinks
     */
    notifications?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationLinks
     */
    picture?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationLinks
     */
    background?: string;
}

export function ApplicationLinksFromJSON(json: any): ApplicationLinks {
    return ApplicationLinksFromJSONTyped(json, false);
}

export function ApplicationLinksFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationLinks {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'self': !exists(json, 'self') ? undefined : json['self'],
        'members': !exists(json, 'members') ? undefined : json['members'],
        'notifications': !exists(json, 'notifications') ? undefined : json['notifications'],
        'picture': !exists(json, 'picture') ? undefined : json['picture'],
        'background': !exists(json, 'background') ? undefined : json['background'],
    };
}

export function ApplicationLinksToJSON(value?: ApplicationLinks | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'self': value.self,
        'members': value.members,
        'notifications': value.notifications,
        'picture': value.picture,
        'background': value.background,
    };
}


