import { Dispatch } from "react";
import {getLyric, getSongDetail_163} from "../../../service/module/player";
import actionTypes from "./constant";
import {ILyric, parseLyric} from "../../../utils/parse-lyric";

const changeCurrentSongAction = (currentSong: any) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong,
});

export const getSongDetailAction = (ids: number) => {
  return (dispatch: Dispatch<any>,getState:any) => {
    getSongDetail_163(ids).then((res) => {
      let song = null;
      // 根据id查找playList中是否存在该歌曲
      const playerList = getState().playerBar.playList;
      const index = playerList.findIndex((song:any) => song.id === ids)
      //是否找到歌曲
      if(index !== -1){
        //找到歌曲
        dispatch(changeCurrentSongIndexAction(index))
        song = playerList[index]
        dispatch(changeCurrentSongAction(song))
      }else{
        song = res.data.songs && res.data.songs[0];
        if(!song) return
          const newPlayList = [...playerList,song];
          dispatch(changePlayListAction(newPlayList));
          dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
          dispatch(changeCurrentSongAction(song));
      }

      //请求歌词
      if(!song) return;
      dispatch(getLyricAction(song.id))
    });
  };
};

export const changeCurrentSong = (tag : 'previous' | 'next',musicIndex? : number) => {
  return (dispatch:Dispatch<any>,getState:any) => {
    const sequence = getState().playerBar.sequence;
    let currentSongIndex = getState().playerBar.currentSongIndex;
    const playList = getState().playerBar.playList
    if(typeof musicIndex === 'number'){
      //选择了列表中的歌曲
      const currentSong = playList[musicIndex];
      dispatch(changeCurrentSongAction(currentSong));
      dispatch(changeCurrentSongIndexAction(currentSongIndex))
      return false
    }
    switch (sequence) {
      case 1:
        //随机播放
        let randomIdx = Math.floor(Math.random() * playList.length);
        while(randomIdx === currentSongIndex){
          randomIdx = Math.floor(Math.random() * playList.length)
        }
        currentSongIndex = randomIdx
        break
      default:
        //顺序播放
        currentSongIndex += tag === 'previous' ? -1 : 1;
        if(currentSongIndex >= playList.length){
          //超过列表上限
          currentSongIndex = 0
        }
        if(currentSongIndex < 0){
          //超过列表下限
          currentSongIndex = playList.length - 1
        }
        break
    }
    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongAction(currentSong));
    dispatch(changeCurrentSongIndexAction(currentSongIndex))
    dispatch(getLyricAction(currentSong.id))
  }
}

export const changePlayListAction = (playList:any) => ({
  type:actionTypes.CHANGE_PLAY_LIST,
  playList
})

export const changeCurrentSongIndexAction = (currentSongIndex:number) => ({
  type:actionTypes.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex
})

export const changeSequenceAction = (sequence:number) => ({
  type:actionTypes.CHANGE_SEQUENCE,
  sequence
})

//保存歌词
export const changeCurrentLyricAction = (currentLyric:ILyric[]) => ({
  type:actionTypes.CHANGE_CURRENT_LYRIC,
  currentLyric
})

//获取歌词
export const getLyricAction = (id:number) => {
  return (dispatch:Dispatch<any>) => {
    getLyric(id).then(res => {
      const lyricString = res.data.lrc.lyric;
      const lyricList = parseLyric(lyricString)
      dispatch(changeCurrentLyricAction(lyricList))
    })
  }
}