import { IMusicInfo } from "../pages/player/store/reducer";

export const formatMusicInfo = (musicInfo: any, origin: string): IMusicInfo => {
  let song;
  switch (origin) {
    case "netease":
      song = musicInfo.songs[0];
      return {
        origin,
        id: song.id,
        singerName: song.ar && song.ar[0].name,
        duration: song.dt || 0,
        picUrl: (song.al && song.al.picUrl) || "",
        name: song.name,
      };
    default:
      song = musicInfo;
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
