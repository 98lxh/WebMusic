import React from "react";
import ReactDOM from "react-dom";
import { request } from "../request";
import { HotRecommend, RecommendBannersType } from "./types";
import { Spin } from "antd";
export const getTopBanners = (loadNode: any) => {
  return request<RecommendBannersType>({
    url: "/banner",
    interceptors: {
      requestInterceptor: (config) => {
        console.log("请求开始", loadNode);
        ReactDOM.render((<Spin />) as any, loadNode);
        return config;
      },
      responseInterceptor: (res) => {
        console.log("请求完成");
        loadNode.parentElement?.removeChild(loadNode);
        return res;
      },
    },
  });
};

export const getHotRecommends = () => {
  return request<HotRecommend>({
    url: "/personalized",
    params: {
      limit: 8,
    },
  });
};

export const getTopList = (idx: number) => {
  return request({
    url: "/top/list",
    params: {
      idx,
    },
  });
};
