import service from "../service";
import { origin } from "../config";

export const getSongDetail_netease = (ids: number) => {
  return service.request<any>(
    {
      url: "/song/detail",
      params: {
        ids,
      },
    },
    {
      origin,
    }
  );
};

export const getLRC_NETEASE = (id: number) => {
  return service.request<any>({
    url: "lyric",
    params: {
      id,
    },
  });
};
