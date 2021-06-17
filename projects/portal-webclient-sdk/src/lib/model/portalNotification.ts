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


export interface PortalNotification { 
    /**
     * Unique identifier of a portal notification.
     */
    id?: string;
    /**
     * Title of the portal notification.
     */
    title?: string;
    /**
     * Content of the notification.
     */
    message?: string;
    /**
     * Creation date and time of the notification.
     */
    created_at?: Date;
}

