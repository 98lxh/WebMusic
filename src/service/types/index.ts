import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface IServiceInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestIntercetorCatch?: (error: any) => any;
  responseInterceptor?: (res: T) => T;
  responseIntercetorCatch?: (error: any) => any;
}

//extensions axios request config
export interface IRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: IServiceInterceptors<T>;
}
