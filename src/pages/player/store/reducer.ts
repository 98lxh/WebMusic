import { Reducer } from "redux";
import actionTypes from "./constant";
import { ILyric } from "../../../utils/parse-lyric";

export interface IMusicInfo {
  origin: string;
  name: string;
  duration: number;
  singerName: string;
  picUrl: string;
  id: number;
}

export interface IPlayerBarState {
  currentSong: IMusicInfo | {};
  playList: IMusicInfo[];
  sequence: number;
  currentLyric: ILyric[];
  isShowPlayer: boolean;
}

const defaultState = {
  playList: [],
  currentSongIndex: 0,
  currentSong: {},
  sequence: 2, //0 单曲 1随机 //2顺序
  currentLyric: [],
  isShowPlayer: true,
};

export const reducer: Reducer<IPlayerBarState> = (
  state = defaultState,
  action: any
) => {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return { ...state, currentSong: action.currentSong };
    case actionTypes.CHANGE_PLAY_LIST:
      return { ...state, playList: action.playList };
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return { ...state, currentSongIndex: action.currentSongIndex };
    case actionTypes.CHANGE_SEQUENCE:
      return { ...state, sequence: action.sequence };
    case actionTypes.CHANGE_CURRENT_LYRIC:
      return { ...state, currentLyric: action.currentLyric };
    case actionTypes.CHANGE_SHOW_PLAYER:
      return { ...state, isShowPlayer: action.isShowPlayer };
    default:
      return state;
  }
};
