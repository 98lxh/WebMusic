import axios, { AxiosInstance, AxiosResponse } from "axios";
import { IRequestConfig } from "./types";
import ReactDOM from "react-dom";
import { Spin } from "antd";
// import { LoadingOutlined } from "@ant-design/icons";
import GolbalLoading from "../components/GlobalLoading";

export class Service {
  instance?: AxiosInstance;
  constructor(baseURL: string, timeout: number) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });
  }

  request<T = any, M = any>(
    config: IRequestConfig<T>,
    machiningRes?: M
  ): Promise<(T & M) | T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }
      this.instance!.request<any, AxiosResponse<T>>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            (res as unknown) = config.interceptors.responseInterceptor(
              res as any
            );
          }
          //加工响应
          if (machiningRes) {
            const newRes = { ...res.data, ...machiningRes };
            resolve(newRes);
          } else {
            resolve(res.data);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  requestLoadWithElement<T>(
    config: IRequestConfig<T>,
    loadElm: Element
  ): Promise<T> {
    config.interceptors = {};
    config.interceptors!.requestInterceptor = (config) => {
      ReactDOM.render(<GolbalLoading />, loadElm);
      return config;
    };
    config.interceptors!.responseInterceptor = (res) => {
      loadElm.parentElement?.removeChild(loadElm);
      return res;
    };
    config = config.interceptors!.requestInterceptor(config);

    return new Promise((resolve, reject) => {
      this.instance!.request<any, AxiosResponse<T>>(config)
        .then((res) => {
          if (config.interceptors!.responseInterceptor) {
            (res as any) = config.interceptors!.responseInterceptor(res as any);
          }
          resolve(res.data);
        })
        .catch((error) => {
          loadElm.parentElement?.removeChild(loadElm);
          reject(error);
        });
    });
  }
}
