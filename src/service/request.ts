import axios from "axios";

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
