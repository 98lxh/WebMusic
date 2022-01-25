import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { BASE_URL, TIMEOUT } from "./config";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

instance.interceptors.request.use((config) => {
  //loading
  return config;
});

instance.interceptors.response.use((res) => {
  return res;
});

interface IServiceInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestIntercetorCatch?: (error: any) => any;
  responseInterceptor?: (res: T) => T;
  responseIntercetorCatch?: (error: any) => any;
}

//extensions axios request config
interface IRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: IServiceInterceptors<T>;
  showLoadding?: boolean;
}

export function request<T>(config: IRequestConfig<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config);
    }

    instance
      .request<any, T>(config)
      .then((res) => {
        if (config.interceptors?.responseInterceptor) {
          res = config.interceptors.responseInterceptor(res);
        }

        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export default instance;
