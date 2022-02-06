import axios, {AxiosInstance, AxiosResponse} from "axios";
import {IRequestConfig} from "./types";
import ReactDOM from "react-dom";
import {Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

export class Service{
    instance?:AxiosInstance
    constructor(baseURL:string,timeout:number){
        this.instance = axios.create({
            baseURL,
            timeout
        })
   }

   request<T>(config:IRequestConfig<T>):Promise<AxiosResponse<T>> {
       return new Promise((resolve, reject) => {
           if (config.interceptors?.requestInterceptor) {
               config = config.interceptors.requestInterceptor(config);
           }

           this.instance!
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

    requestLoadWithElement<T>(
        config: IRequestConfig<T>,
        loadElm: Element
    ): Promise<AxiosResponse<T>>  {
        config.interceptors = {};
        config.interceptors!.requestInterceptor = (config) => {
            ReactDOM.render(
                <Spin
                    className="loadding"
                    size="large"
                    tip="加载中,请耐心等待..."
                    indicator={<LoadingOutlined/>}
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
            this.instance!
                .request<any, AxiosResponse<T>>(config)
                .then((res) => {
                    if (config.interceptors!.responseInterceptor) {
                        (res as any) = config.interceptors!.responseInterceptor(res as any);
                    }
                    resolve(res);
                })
                .catch((error) => {
                    loadElm.parentElement?.removeChild(loadElm);
                    reject(error);
                });
        });
    }
}