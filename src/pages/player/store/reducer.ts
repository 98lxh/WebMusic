import { Reducer } from "redux";
import actionTypes from "./constant";
import { ILyric } from "../../../utils/parse-lyric";

export interface IMusicInfo {
  origin:string,
  name:string,
  duration:number,
  singerName:string,
  picUrl:string,
  id:number
}

export interface IPlayerBarState {
  currentSong: IMusicInfo | {};
  playList: IMusicInfo[];
  sequence: number;
  currentLyric: ILyric[];
}


const defaultState = {
  playList: [
    {
      duration: 168378,
      id: 1914692581,
      name: 'xxx',
      origin: "netease",
      picUrl: "https://p1.music.126.net/dT914ZDRTeIQYVnHtRUWug==/109951166974912911.jpg",
      singerName: "冰冷端",
    }
  ],
  currentSongIndex: 0,
  currentSong: {},
  sequence: 0, //0 单曲 1随机 //2顺序
  currentLyric: [],
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
    default:
      return state;
  }
};
