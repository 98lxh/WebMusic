import service from "../service";

export const searchMusic_netease = (keywords:string) => {
    return service.request({
        url:"/search",
        params:{
            keywords
        }
    })
}