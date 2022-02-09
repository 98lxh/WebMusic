import { Dispatch } from "react";
import {
  getLRC_NETEASE,
  getSongDetail_netease,
} from "../../../service/module/netease/module/player";
import actionTypes from "./constant";
import { ILyric, parseLyric } from "../../../utils/parse-lyric";
import { formatMusicInfo } from "../../../utils/format-musicInfo";
import { getLRC_BBBUG } from "../../../service/module/bbbug/module/player";

const changeCurrentSongAction = (currentSong: any) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong,
});

export const getSongDetailAction = (
  ids: number,
  origin: string,
  bbbugSongInfo?: any
) => {
  return (dispatch: Dispatch<any>, getState: any) => {
    //根据id查找playList中是否存在歌曲
    let song = null;
    const playerList = getState().playerBar.playList;
    const index = playerList.findIndex((song: any) => song.id === ids);
    if (index !== -1) {
      dispatch(changeCurrentSongIndexAction(index));
      song = playerList[index];
      dispatch(changeCurrentSongAction(song));
      //请求歌词
      dispatch(getLyricAction(song.id, origin));
    } else {
      //列表中不存在该歌曲
      //区分来源
      switch (origin) {
        case "netease":
          getSongDetail_netease(ids).then((res) => {
            song = res.songs && formatMusicInfo(res, origin);
            if (!song) return;
            const newPlayList = [...playerList, song];
            dispatch(changePlayListAction(newPlayList));
            dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
            dispatch(changeCurrentSongAction(song));
            //请求歌词
            dispatch(getLyricAction(song.id, origin));
          });
          break;
        default:
          song = formatMusicInfo(bbbugSongInfo, origin);
          const newPlayList = [...playerList, song];
          dispatch(changePlayListAction(newPlayList));
          dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
          dispatch(changeCurrentSongAction(song));
          //请求歌词
          dispatch(getLyricAction(song!.id, origin));
          break;
      }
    }
  };
};

export const changeCurrentSong = (
  tag: "previous" | "next",
  musicIndex?: number
) => {
  return (dispatch: Dispatch<any>, getState: any) => {
    const sequence = getState().playerBar.sequence;
    let currentSongIndex = getState().playerBar.currentSongIndex;
    const playList = getState().playerBar.playList;
    if (typeof musicIndex === "number") {
      //选择了列表中的歌曲
      const currentSong = playList[musicIndex];
      dispatch(changeCurrentSongAction(currentSong));
      dispatch(changeCurrentSongIndexAction(currentSongIndex));
      dispatch(getLyricAction(currentSong.id, currentSong.origin));
      return false;
    }
    switch (sequence) {
      case 1:
        //随机播放
        let randomIdx = Math.floor(Math.random() * playList.length);
        while (randomIdx === currentSongIndex) {
          randomIdx = Math.floor(Math.random() * playList.length);
        }
        currentSongIndex = randomIdx;
        break;
      default:
        //顺序播放
        currentSongIndex += tag === "previous" ? -1 : 1;
        if (currentSongIndex >= playList.length) {
          //超过列表上限
          currentSongIndex = 0;
        }
        if (currentSongIndex < 0) {
          //超过列表下限
          currentSongIndex = playList.length - 1;
        }
        break;
    }
    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongAction(currentSong));
    dispatch(changeCurrentSongIndexAction(currentSongIndex));
    dispatch(getLyricAction(currentSong.id, currentSong.origin));
  };
};

export const changePlayListAction = (playList: any) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList,
});

export const changeCurrentSongIndexAction = (currentSongIndex: number) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex,
});

export const changeSequenceAction = (sequence: number) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence,
});

//保存歌词
export const changeCurrentLyricAction = (currentLyric: ILyric[]) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC,
  currentLyric,
});

//获取歌词
export const getLyricAction = (id: number, origin: string) => {
  return (dispatch: Dispatch<any>) => {
    switch (origin) {
      case "netease":
        getLRC_NETEASE(id).then((res) => {
          const lyricString = res.lrc.lyric;
          const lyricList = parseLyric(lyricString, origin);
          dispatch(changeCurrentLyricAction(lyricList));
        });
        break;
      default:
        getLRC_BBBUG(id).then((res) => {
          const lyricString = res.data;
          const lyricList = parseLyric(lyricString, origin);
          dispatch(changeCurrentLyricAction(lyricList));
        });
        break;
    }
  };
};

//显示隐藏播放条
export const changeShowPlayerAction = (isShowPlayer: boolean) => ({
  isShowPlayer,
  type: actionTypes.CHANGE_SHOW_PLAYER,
});
