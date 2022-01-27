import axios, { Axios, AxiosResponse } from "axios";

import { BASE_URL, TIMEOUT } from "./config";
import { IRequestConfig } from "./types";

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

export function request<T>(
  config: IRequestConfig<T>
): Promise<AxiosResponse<T>> {
  return new Promise((resolve, reject) => {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config);
    }

    instance
      .request<any, AxiosResponse<T>>(config)
      .then((res) => {
        if (config.interceptors?.responseInterceptor) {
          (res as unknown) = config.interceptors.responseInterceptor(
            res as any
          );
        }

        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export default instance;
