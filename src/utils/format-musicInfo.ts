import {IMusicInfo} from "../pages/player/store/reducer";

export const formatMusicInfo = (musicInfo:any):IMusicInfo | undefined => {
    switch (musicInfo.origin) {
        case 'netease':
            const song = musicInfo.songs[0]
            return {
                origin:musicInfo.origin,
                id:song.id,
                singerName:song.ar && song.ar[0].name,
                duration:song.dt || 0,
                picUrl:(song.al && song.al.picUrl) || "",
                name:song.name,
            }
            break
    }
}