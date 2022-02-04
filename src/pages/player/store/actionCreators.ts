import { Dispatch } from "react";
import { getSongDetail_163 } from "../../../service/module/player";
import actionTypes from "./constant";

const changeCurrentSongAction = (currentSong: any) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong,
});

export const getSongDetailAction = (ids: number) => {
  return (dispatch: Dispatch<any>,getState:any) => {
    getSongDetail_163(ids).then((res) => {
      // 根据id查找playList中是否存在该歌曲
      const playerList = getState().playerBar.playList;
      console.log(getState())
      const index = playerList.findIndex((song:any) => song.id === ids)

      //是否找到歌曲
      if(index !== -1){
        //找到歌曲
        dispatch(changeCurrentSongIndexAction(index))
        const song = playerList[index]
        dispatch(changeCurrentSongAction(song))
      }else{
        const song = res.data.songs && res.data.songs[0];
        if(!song) return
          const newPlayList = [...playerList,song];
          dispatch(changePlayListAction(newPlayList));
          dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
          dispatch(changeCurrentSongAction(song));
      }
    });
  };
};

export const changePlayListAction = (playList:any) => ({
  type:actionTypes.CHANGE_PLAY_LIST,
  playList
})

export const changeCurrentSongIndexAction = (index:number) => ({
  type:actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index
})

export const changeSequenceAction = (sequence:number) => ({
  type:actionTypes.CHANGE_SEQUENCE,
  sequence
})
