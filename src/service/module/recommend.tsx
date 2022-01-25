import { request } from "../request";
import { requestLoadWithElement } from "../requestPro";
import { HotRecommend, RecommendBannersType } from "./types";
export const getTopBanners = (loadNode: any) => {
  return requestLoadWithElement<RecommendBannersType>(
    {
      url: "/banner",
    },
    loadNode
  );
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
