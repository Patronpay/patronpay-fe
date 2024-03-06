import axios from "axios";

import { API_SERVER_URL } from "@constants";

const LocalStorage = localStorage.getItem("token");

axios.defaults.headers.common.Authorization = `Bearer ${LocalStorage}`;

/**
 * Base get api
 */
export const getApi = (url: any) => axios.get(API_SERVER_URL + url);

/**
 * Base post api
 */
export const postApi = (url: any, data: any, shortUrl: boolean = true) =>
  axios.post((shortUrl ? API_SERVER_URL : "") + url, data);

/**
 * Base put api
 */
export const putApi = (url: any, data?: any, shortUrl: boolean = true) =>
  axios.put((shortUrl ? API_SERVER_URL : "") + url, data);

/**
 * Base patch api
 */
export const patchApi = (url: any, data?: any, shortUrl: boolean = true) =>
  axios.patch((shortUrl ? API_SERVER_URL : "") + url, data);

/**
 * Base delete api
 */
export const deleteApi = (url: any) => axios.delete(API_SERVER_URL + url);
