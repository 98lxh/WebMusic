import { IMusicInfo } from "../pages/player/store/reducer";

export const formatMusicInfo = (musicInfo: any, origin: string): IMusicInfo => {
  let song = musicInfo
  switch (origin) {
    case "netease":
      return {
        origin,
        id: song.id,
        singerName: song.ar && song.ar[0].name,
        duration: song.dt || 0,
        picUrl: (song.al && song.al.picUrl) || "",
        name: song.name,
      };
    default:
      return {
        origin,
        id: song.mid,
        singerName: song.singer,
        duration: song.length * 1000 || 0,
        picUrl: song.pic || "",
        name: song.name,
      };
  }
};
