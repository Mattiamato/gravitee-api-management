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
    ApiKeyMode,
    ApiKeyModeFromJSON,
    ApiKeyModeFromJSONTyped,
    ApiKeyModeToJSON,
    ApplicationSettings,
    ApplicationSettingsFromJSON,
    ApplicationSettingsFromJSONTyped,
    ApplicationSettingsToJSON,
} from './';

/**
 * 
 * @export
 * @interface UpdateApplicationEntity
 */
export interface UpdateApplicationEntity {
    /**
     * Application's name. Duplicate names can exists.
     * @type {string}
     * @memberof UpdateApplicationEntity
     */
    name: string;
    /**
     * Application's description. A short description of your App.
     * @type {string}
     * @memberof UpdateApplicationEntity
     */
    description: string;
    /**
     * Domain used by the application, if relevant
     * @type {string}
     * @memberof UpdateApplicationEntity
     */
    domain?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateApplicationEntity
     */
    picture?: string;
    /**
     * 
     * @type {ApplicationSettings}
     * @memberof UpdateApplicationEntity
     */
    settings: ApplicationSettings;
    /**
     * Application groups. Used to add teams to your application.
     * @type {Array<string>}
     * @memberof UpdateApplicationEntity
     */
    groups?: Array<string>;
    /**
     * a string to describe the type of your app.
     * @type {string}
     * @memberof UpdateApplicationEntity
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateApplicationEntity
     */
    clientId?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateApplicationEntity
     */
    background?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateApplicationEntity
     */
    picture_url?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateApplicationEntity
     */
    disable_membership_notifications?: boolean;
    /**
     * 
     * @type {ApiKeyMode}
     * @memberof UpdateApplicationEntity
     */
    api_key_mode?: ApiKeyMode;
}

export function UpdateApplicationEntityFromJSON(json: any): UpdateApplicationEntity {
    return UpdateApplicationEntityFromJSONTyped(json, false);
}

export function UpdateApplicationEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateApplicationEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'],
        'domain': !exists(json, 'domain') ? undefined : json['domain'],
        'picture': !exists(json, 'picture') ? undefined : json['picture'],
        'settings': ApplicationSettingsFromJSON(json['settings']),
        'groups': !exists(json, 'groups') ? undefined : json['groups'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'clientId': !exists(json, 'clientId') ? undefined : json['clientId'],
        'background': !exists(json, 'background') ? undefined : json['background'],
        'picture_url': !exists(json, 'picture_url') ? undefined : json['picture_url'],
        'disable_membership_notifications': !exists(json, 'disable_membership_notifications') ? undefined : json['disable_membership_notifications'],
        'api_key_mode': !exists(json, 'api_key_mode') ? undefined : ApiKeyModeFromJSON(json['api_key_mode']),
    };
}

export function UpdateApplicationEntityToJSON(value?: UpdateApplicationEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'domain': value.domain,
        'picture': value.picture,
        'settings': ApplicationSettingsToJSON(value.settings),
        'groups': value.groups,
        'type': value.type,
        'clientId': value.clientId,
        'background': value.background,
        'picture_url': value.picture_url,
        'disable_membership_notifications': value.disable_membership_notifications,
        'api_key_mode': ApiKeyModeToJSON(value.api_key_mode),
    };
}


