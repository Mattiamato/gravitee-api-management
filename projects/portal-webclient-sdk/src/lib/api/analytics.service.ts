/**
 * Gravitee.io Portal Rest API
 * API dedicated to the devportal part of Gravitee
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: contact@graviteesource.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { CountAnalytics, DateHistoAnalytics, GroupByAnalytics } from '../model/models';
import { Log } from '../model/log';
import { LogsResponse } from '../model/logsResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


export interface ExportApplicationLogsByApplicationIdRequestParams {
    /** Id of an application. */
    applicationId: string;
    /** The page number for pagination. */
    page?: number;
    /** The number of items per page for pagination. If the size is 0, the response contains only metadata and returns the values as for a non-paged resource. If the size is -1, the response contains all datas.  */
    size?: number;
    /** Lower bound of timestamp for filtering. */
    from?: number;
    /** Upper bound of timestamp for filtering. Must be greater than *from* query param. */
    to?: number;
    /** Query used for filtering. */
    query?: string;
    /** Field used for filtering. **required** when type is **GROUP_BY**. */
    field?: string;
    /** Order used to sort the result list. */
    order?: 'ASC' | 'DESC';
}

export interface GetApplicationAnalyticsRequestParams {
    /** Id of an application. */
    applicationId: string;
    /** The page number for pagination. */
    page?: number;
    /** The number of items per page for pagination. If the size is 0, the response contains only metadata and returns the values as for a non-paged resource. If the size is -1, the response contains all datas.  */
    size?: number;
    /** Lower bound of timestamp for filtering. */
    from?: number;
    /** Upper bound of timestamp for filtering. Must be greater than *from* query param. */
    to?: number;
    /** Interval for time search. Must be &gt;&#x3D; 1 000 and &lt;&#x3D; 1 000 000 000. */
    interval?: number;
    /** Query used for filtering. */
    query?: string;
    /** Field used for filtering. **required** when type is **GROUP_BY**. */
    field?: string;
    /** Type of analytics that is expected :   - GROUP_BY :       Used to group total hits by a specific field (Application, Status, Path, ...).\\       Query params :       - from       - to       - interval       - query       - field       - order       - ranges   - DATE_HISTO :       Used to retrieve total hits per range of time, on a specific time interval.\\       Query params :       - from       - to       - interval       - query       - aggs   - COUNT :       Used to retrieve total hits, on a specific time interval.\\       Query params :       - from       - to       - interval       - query   - STATS :       Used to retrieve stats data, on a specific time interval.\\       Query params :       - from       - to       - query  */
    type?: 'GROUP_BY' | 'DATE_HISTO' | 'COUNT' | 'STATS';
    /** Used with GROUP_BY type only.  A semicolon separated list of \&quot;from:to\&quot; elements. **_/!\\\\ Different from *from* and *to* query params**  */
    ranges?: string;
    /** Used with DATE_HISTO type only.  A semicolon separated list of \&quot;type:field\&quot; elements. **_/!\\\\ Different from *type* and *field* query params**\\ Type can be **FIELD**, **AVG**, **MIN**, **MAX**  */
    aggs?: string;
    /** Used with GROUP_BY type only.  A colon separated list of \&quot;type:field\&quot; elements. **_/!\\\\ Different from *type* and *field* query params**\\ By default, sort is ASC. If *type* starts with \&#39;-\&#39;, the order sort is DESC.\\ Currently, only **AVG** is supported.  */
    order?: string;
}

export interface GetApplicationLogByApplicationIdAndLogIdRequestParams {
    /** Id of an application. */
    applicationId: string;
    /** Id of a log. */
    logId: string;
    /** Used to select the right index */
    timestamp?: number;
}

export interface GetApplicationLogsRequestParams {
    /** Id of an application. */
    applicationId: string;
    /** The page number for pagination. */
    page?: number;
    /** The number of items per page for pagination. If the size is 0, the response contains only metadata and returns the values as for a non-paged resource. If the size is -1, the response contains all datas.  */
    size?: number;
    /** Lower bound of timestamp for filtering. */
    from?: number;
    /** Upper bound of timestamp for filtering. Must be greater than *from* query param. */
    to?: number;
    /** Query used for filtering. */
    query?: string;
    /** Field used for filtering. **required** when type is **GROUP_BY**. */
    field?: string;
    /** Order used to sort the result list. */
    order?: 'ASC' | 'DESC';
}


@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

    protected basePath = 'http://localhost:8083/portal/environments/DEFAULT';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }



    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key,
                        (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * Export application logs as CSV
     * Export application logs as CSV.  User must have the APPLICATION_LOG[READ] permission. 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public exportApplicationLogsByApplicationId(requestParameters: ExportApplicationLogsByApplicationIdRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'text/plain' | 'application/json'}): Observable<string>;
    public exportApplicationLogsByApplicationId(requestParameters: ExportApplicationLogsByApplicationIdRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'text/plain' | 'application/json'}): Observable<HttpResponse<string>>;
    public exportApplicationLogsByApplicationId(requestParameters: ExportApplicationLogsByApplicationIdRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'text/plain' | 'application/json'}): Observable<HttpEvent<string>>;
    public exportApplicationLogsByApplicationId(requestParameters: ExportApplicationLogsByApplicationIdRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'text/plain' | 'application/json'}): Observable<any> {
        const applicationId = requestParameters.applicationId;
        if (applicationId === null || applicationId === undefined) {
            throw new Error('Required parameter applicationId was null or undefined when calling exportApplicationLogsByApplicationId.');
        }
        const page = requestParameters.page;
        const size = requestParameters.size;
        const from = requestParameters.from;
        const to = requestParameters.to;
        const query = requestParameters.query;
        const field = requestParameters.field;
        const order = requestParameters.order;

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (page !== undefined && page !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>page, 'page');
        }
        if (size !== undefined && size !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>size, 'size');
        }
        if (from !== undefined && from !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>from, 'from');
        }
        if (to !== undefined && to !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>to, 'to');
        }
        if (query !== undefined && query !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>query, 'query');
        }
        if (field !== undefined && field !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>field, 'field');
        }
        if (order !== undefined && order !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>order, 'order');
        }

        let headers = this.defaultHeaders;

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (CookieAuth) required
        if (this.configuration.apiKeys) {
            const key: string | undefined = this.configuration.apiKeys["CookieAuth"] || this.configuration.apiKeys["Auth-Graviteeio-APIM"];
            if (key) {
            }
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'text/plain',
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.post<string>(`${this.configuration.basePath}/applications/${encodeURIComponent(String(applicationId))}/logs/_export`,
            null,
            {
                params: queryParameters,
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get Application analytics
     * Get the application analytics.  User must have the APPLICATION_ANALYTICS[READ] permission. 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getApplicationAnalytics(requestParameters: GetApplicationAnalyticsRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<DateHistoAnalytics | GroupByAnalytics | CountAnalytics>;
    public getApplicationAnalytics(requestParameters: GetApplicationAnalyticsRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<DateHistoAnalytics | GroupByAnalytics | CountAnalytics>>;
    public getApplicationAnalytics(requestParameters: GetApplicationAnalyticsRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<DateHistoAnalytics | GroupByAnalytics | CountAnalytics>>;
    public getApplicationAnalytics(requestParameters: GetApplicationAnalyticsRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        const applicationId = requestParameters.applicationId;
        if (applicationId === null || applicationId === undefined) {
            throw new Error('Required parameter applicationId was null or undefined when calling getApplicationAnalytics.');
        }
        const page = requestParameters.page;
        const size = requestParameters.size;
        const from = requestParameters.from;
        const to = requestParameters.to;
        const interval = requestParameters.interval;
        const query = requestParameters.query;
        const field = requestParameters.field;
        const type = requestParameters.type;
        const ranges = requestParameters.ranges;
        const aggs = requestParameters.aggs;
        const order = requestParameters.order;

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (page !== undefined && page !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>page, 'page');
        }
        if (size !== undefined && size !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>size, 'size');
        }
        if (from !== undefined && from !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>from, 'from');
        }
        if (to !== undefined && to !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>to, 'to');
        }
        if (interval !== undefined && interval !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>interval, 'interval');
        }
        if (query !== undefined && query !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>query, 'query');
        }
        if (field !== undefined && field !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>field, 'field');
        }
        if (type !== undefined && type !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>type, 'type');
        }
        if (ranges !== undefined && ranges !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>ranges, 'ranges');
        }
        if (aggs !== undefined && aggs !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>aggs, 'aggs');
        }
        if (order !== undefined && order !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>order, 'order');
        }

        let headers = this.defaultHeaders;

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (CookieAuth) required
        if (this.configuration.apiKeys) {
            const key: string | undefined = this.configuration.apiKeys["CookieAuth"] || this.configuration.apiKeys["Auth-Graviteeio-APIM"];
            if (key) {
            }
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.get<DateHistoAnalytics | GroupByAnalytics | CountAnalytics>(`${this.configuration.basePath}/applications/${encodeURIComponent(String(applicationId))}/analytics`,
            {
                params: queryParameters,
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get a specific log of an application
     * Get a specific log of an application.  User must have the APPLICATION_LOG[READ] permission. 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getApplicationLogByApplicationIdAndLogId(requestParameters: GetApplicationLogByApplicationIdAndLogIdRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Log>;
    public getApplicationLogByApplicationIdAndLogId(requestParameters: GetApplicationLogByApplicationIdAndLogIdRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Log>>;
    public getApplicationLogByApplicationIdAndLogId(requestParameters: GetApplicationLogByApplicationIdAndLogIdRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Log>>;
    public getApplicationLogByApplicationIdAndLogId(requestParameters: GetApplicationLogByApplicationIdAndLogIdRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        const applicationId = requestParameters.applicationId;
        if (applicationId === null || applicationId === undefined) {
            throw new Error('Required parameter applicationId was null or undefined when calling getApplicationLogByApplicationIdAndLogId.');
        }
        const logId = requestParameters.logId;
        if (logId === null || logId === undefined) {
            throw new Error('Required parameter logId was null or undefined when calling getApplicationLogByApplicationIdAndLogId.');
        }
        const timestamp = requestParameters.timestamp;

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (timestamp !== undefined && timestamp !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>timestamp, 'timestamp');
        }

        let headers = this.defaultHeaders;

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (CookieAuth) required
        if (this.configuration.apiKeys) {
            const key: string | undefined = this.configuration.apiKeys["CookieAuth"] || this.configuration.apiKeys["Auth-Graviteeio-APIM"];
            if (key) {
            }
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.get<Log>(`${this.configuration.basePath}/applications/${encodeURIComponent(String(applicationId))}/logs/${encodeURIComponent(String(logId))}`,
            {
                params: queryParameters,
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get Application logs
     * Get the application logs.  User must have the APPLICATION_LOG[READ] permission. 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getApplicationLogs(requestParameters: GetApplicationLogsRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<LogsResponse>;
    public getApplicationLogs(requestParameters: GetApplicationLogsRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<LogsResponse>>;
    public getApplicationLogs(requestParameters: GetApplicationLogsRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<LogsResponse>>;
    public getApplicationLogs(requestParameters: GetApplicationLogsRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        const applicationId = requestParameters.applicationId;
        if (applicationId === null || applicationId === undefined) {
            throw new Error('Required parameter applicationId was null or undefined when calling getApplicationLogs.');
        }
        const page = requestParameters.page;
        const size = requestParameters.size;
        const from = requestParameters.from;
        const to = requestParameters.to;
        const query = requestParameters.query;
        const field = requestParameters.field;
        const order = requestParameters.order;

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (page !== undefined && page !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>page, 'page');
        }
        if (size !== undefined && size !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>size, 'size');
        }
        if (from !== undefined && from !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>from, 'from');
        }
        if (to !== undefined && to !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>to, 'to');
        }
        if (query !== undefined && query !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>query, 'query');
        }
        if (field !== undefined && field !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>field, 'field');
        }
        if (order !== undefined && order !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>order, 'order');
        }

        let headers = this.defaultHeaders;

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (CookieAuth) required
        if (this.configuration.apiKeys) {
            const key: string | undefined = this.configuration.apiKeys["CookieAuth"] || this.configuration.apiKeys["Auth-Graviteeio-APIM"];
            if (key) {
            }
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.get<LogsResponse>(`${this.configuration.basePath}/applications/${encodeURIComponent(String(applicationId))}/logs`,
            {
                params: queryParameters,
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
