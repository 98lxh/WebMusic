import service from "../service";
import {
  IHotRecommend,
  IRecommendBannners,
  ITopRecommend,
} from "./types/index";

export const getTopBanners = (loadElm: Element) => {
  return service.requestLoadWithElement<IRecommendBannners>(
    {
      url: "/banner",
    },
    loadElm
  );
};

export const getHotRecommends = (loadElm: Element) => {
  return service.requestLoadWithElement<IHotRecommend>(
    {
      url: "/personalized",
      params: {
        limit: 8,
      },
    },
    loadElm
  );
};

export const getTopList = (idx: number, loadElm: Element) => {
  return service.requestLoadWithElement<ITopRecommend>(
    {
      url: "/top/list",
      params: {
        idx,
      },
    },
    loadElm
  );
};
