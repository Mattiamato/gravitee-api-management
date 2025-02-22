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
 * @interface ConfigurationDocumentation
 */
export interface ConfigurationDocumentation {
    /**
     * URL of the main documentation.
     * @type {string}
     * @memberof ConfigurationDocumentation
     */
    url?: string;
}

export function ConfigurationDocumentationFromJSON(json: any): ConfigurationDocumentation {
    return ConfigurationDocumentationFromJSONTyped(json, false);
}

export function ConfigurationDocumentationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationDocumentation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function ConfigurationDocumentationToJSON(value?: ConfigurationDocumentation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'url': value.url,
    };
}


