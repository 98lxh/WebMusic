import request from "./../request";
export const getSongDetail_163 = (ids: number) => {
  return request({
    url: "/song/detail",
    params: {
      ids,
    },
  });
};

export const getLyric = (id:number) => {
  return request({
    url:'lyric',
    params:{
      id
    }
  })
}
