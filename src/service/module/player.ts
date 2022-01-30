import request from "./../request";
export const getSongDetail_163 = (ids: number) => {
  return request({
    url: "/song/detail",
    params: {
      ids,
    },
  });
};
