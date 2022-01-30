import { Dispatch } from "react";
import { getSongDetail_163 } from "../../../service/module/player";
import actionTypes from "./constant";

const changeCurrentSongAction = (currentSong: any) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong,
});

export const getSongDetailAction = (ids: number) => {
  return (dispatch: Dispatch<any>) => {
    getSongDetail_163(1430583016).then((res) => {
      dispatch(changeCurrentSongAction(res.data.songs[0]));
    });
  };
};
