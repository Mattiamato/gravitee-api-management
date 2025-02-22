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
 * @interface ThemeLinks
 */
export interface ThemeLinks {
    /**
     * 
     * @type {string}
     * @memberof ThemeLinks
     */
    self?: string;
    /**
     * 
     * @type {string}
     * @memberof ThemeLinks
     */
    backgroundImage?: string;
    /**
     * 
     * @type {string}
     * @memberof ThemeLinks
     */
    logo?: string;
    /**
     * 
     * @type {string}
     * @memberof ThemeLinks
     */
    optionalLogo?: string;
    /**
     * 
     * @type {string}
     * @memberof ThemeLinks
     */
    favicon?: string;
}

export function ThemeLinksFromJSON(json: any): ThemeLinks {
    return ThemeLinksFromJSONTyped(json, false);
}

export function ThemeLinksFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThemeLinks {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'self': !exists(json, 'self') ? undefined : json['self'],
        'backgroundImage': !exists(json, 'backgroundImage') ? undefined : json['backgroundImage'],
        'logo': !exists(json, 'logo') ? undefined : json['logo'],
        'optionalLogo': !exists(json, 'optionalLogo') ? undefined : json['optionalLogo'],
        'favicon': !exists(json, 'favicon') ? undefined : json['favicon'],
    };
}

export function ThemeLinksToJSON(value?: ThemeLinks | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'self': value.self,
        'backgroundImage': value.backgroundImage,
        'logo': value.logo,
        'optionalLogo': value.optionalLogo,
        'favicon': value.favicon,
    };
}


