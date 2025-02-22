/*
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import 'dotenv/config';
import fetchApi from 'node-fetch';
import { BasicAuthentication } from '@model/users';
import { Configuration as ManagementConfiguration } from './management-webclient-sdk/src/lib';
import { Configuration as PortalConfiguration } from './portal-webclient-sdk/src/lib';

export const ADMIN_USER = {
  username: process.env.ADMIN_USERNAME,
  password: process.env.ADMIN_PASSWORD,
};

export const API_USER = {
  username: process.env.API_USERNAME,
  password: process.env.API_PASSWORD,
};

export const APP_USER = {
  username: process.env.APP_USERNAME,
  password: process.env.APP_PASSWORD,
};

export const SIMPLE_USER = {
  username: process.env.SIMPLE_USERNAME,
  password: process.env.SIMPLE_PASSWORD,
};

export const ANONYMOUS = null;

export const forManagementAsAdminUser = () => {
  return forManagement();
};

export const forManagementAsApiUser = () => {
  return forManagement(API_USER);
};

export const forManagementAsSimpleUser = () => {
  return forManagement(SIMPLE_USER);
};

export const forManagement = (auth: BasicAuthentication = ADMIN_USER) => {
  return new ManagementConfiguration({
    basePath: process.env.MANAGEMENT_BASE_PATH,
    fetchApi,
    ...auth,
  });
};

export const forPortal = (auth: BasicAuthentication = ANONYMOUS, envId: string = 'DEFAULT') => {
  return new PortalConfiguration({
    basePath: `${process.env.PORTAL_BASE_PATH}/${envId}`,
    fetchApi,
    ...auth,
  });
};

export const forPortalAsAnonymous = () => {
  return forPortal(ANONYMOUS);
};

export const forPortalAsAdminUser = () => {
  return forPortal(ADMIN_USER);
};

export const forPortalAsApiUser = () => {
  return forPortal(API_USER);
};

export const forPortalAsAppUser = () => {
  return forPortal(APP_USER);
};

export const forPortalAsSimpleUser = () => {
  return forPortal(SIMPLE_USER);
};
