import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import ReactDOM from "react-dom";
import instance from "./request";
import { IRequestConfig } from "./types";
import { AxiosResponse } from "axios";
export function requestLoadWithElement<T>(
  config: IRequestConfig<T>,
  loadElm: Element
): Promise<AxiosResponse<T>> {
  config.interceptors = {};

  config.interceptors!.requestInterceptor = (config) => {
    ReactDOM.render(
      <Spin
        className="loadding"
        size="large"
        tip="加载中,请耐心等待..."
        indicator={<LoadingOutlined />}
      />,
      loadElm
    );
    return config;
  };
  config.interceptors!.responseInterceptor = (res) => {
    loadElm.parentElement?.removeChild(loadElm);
    return res;
  };
  config = config.interceptors!.requestInterceptor(config);

  return new Promise((resolve, reject) => {
    instance
      .request<any, AxiosResponse<T>>(config)
      .then((res) => {
        if (config.interceptors!.responseInterceptor) {
          (res as any) = config.interceptors!.responseInterceptor(res as any);
        }
        console.log("resolve", res);
        resolve(res);
      })
      .catch((error) => {
        loadElm.parentElement?.removeChild(loadElm);
        reject(error);
      });
  });
}
