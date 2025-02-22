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
 * @interface ResetUserPasswordInput
 */
export interface ResetUserPasswordInput {
    /**
     * Username of the user.
     * @type {string}
     * @memberof ResetUserPasswordInput
     */
    username: string;
    /**
     * URL of the password reset page to be used in the 'Password reset' email.
     * @type {string}
     * @memberof ResetUserPasswordInput
     */
    reset_page_url?: string;
}

export function ResetUserPasswordInputFromJSON(json: any): ResetUserPasswordInput {
    return ResetUserPasswordInputFromJSONTyped(json, false);
}

export function ResetUserPasswordInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResetUserPasswordInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'username': json['username'],
        'reset_page_url': !exists(json, 'reset_page_url') ? undefined : json['reset_page_url'],
    };
}

export function ResetUserPasswordInputToJSON(value?: ResetUserPasswordInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'username': value.username,
        'reset_page_url': value.reset_page_url,
    };
}


