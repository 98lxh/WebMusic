import service from "../service";
export const getSongDetail_netease = (ids: number) => {
    return service.request<any>({
        url: "/song/detail",
        params: {
            ids,
        },
    });
};

export const getLyric = (id:number) => {
    return service.request<any>({
        url:'lyric',
        params:{
            id
        }
    })
}
