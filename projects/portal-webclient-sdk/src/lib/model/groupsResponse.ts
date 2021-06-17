/**
 * Gravitee.io Portal Rest API
 * API dedicated to the devportal part of Gravitee
 *
 * The version of the OpenAPI document: 3.10.0-SNAPSHOT
 * Contact: contact@graviteesource.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Group } from './group';
import { Links } from './links';


export interface GroupsResponse { 
    /**
     * List of groups.
     */
    data?: Array<Group>;
    /**
     * Map of Map of Object
     */
    metadata?: { [key: string]: { [key: string]: object; }; };
    links?: Links;
}

