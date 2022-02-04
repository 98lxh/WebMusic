import { request } from "../request";
import { requestLoadWithElement } from "../requestPro";
import {
  IHotRecommend,
  IRecommendBannners,
  ITopRecommend,
} from "./types";

export const getTopBanners = (loadElm: Element) => {
  return requestLoadWithElement<IRecommendBannners>(
    {
      url: "/banner",
    },
    loadElm
  );
};

export const getHotRecommends = (loadElm: Element) => {
  return requestLoadWithElement<IHotRecommend>(
    {
      url: "/personalized",
      params: {
        limit: 8,
      },
    },
    loadElm
  );
};

export const getTopList = (idx: number) => {
  return request<ITopRecommend>({
    url: "/top/list",
    params: {
      idx,
    },
  });
};
