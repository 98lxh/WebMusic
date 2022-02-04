import { Reducer } from "redux";
import actionTypes from "./constant";
export interface IPlayerBarState {
  currentSong: any;
  playList:any[],
  sequence:number
}
const defaultState = {
  playList:[
    {
      "name": "江南",
      "id": 26305527,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 3684,
          "name": "林俊杰",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "600902000007915993",
      "fee": 8,
      "v": 46,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 2448339,
        "name": "他是…JJ林俊杰",
        "picUrl": "https://p1.music.126.net/CcthX_ZCexIdriZADoNn3g==/109951165628166191.jpg",
        "tns": [],
        "pic_str": "109951165628166191",
        "pic": 109951165628166190
      },
      "dt": 267000,
      "h": {
        "br": 320001,
        "fid": 0,
        "size": 10683080,
        "vd": -27757
      },
      "m": {
        "br": 192001,
        "fid": 0,
        "size": 6409866,
        "vd": -25329
      },
      "l": {
        "br": 128001,
        "fid": 0,
        "size": 4273258,
        "vd": -23766
      },
      "a": null,
      "cd": "01",
      "no": 4,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 2,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "tagPicList": null,
      "resourceState": true,
      "version": 46,
      "songJumpInfo": null,
      "entertainmentTags": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mst": 9,
      "cp": 0,
      "rtype": 0,
      "rurl": null,
      "mv": 522362,
      "publishTime": 1356019200007,
      "tns": [
        "River South"
      ]
    },{
      "name": "起风了《旧版》",
      "id": 1878237811,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 48862448,
          "name": "凡人繁生",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 0,
      "v": 6,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 133250720,
        "name": "起风了(旧版)",
        "picUrl": "https://p2.music.126.net/-lmh4bkYX-5QFUoSPuVr3A==/109951166385320789.jpg",
        "tns": [],
        "pic_str": "109951166385320789",
        "pic": 109951166385320780
      },
      "dt": 320224,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 12811245,
        "vd": -60772
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 7686765,
        "vd": -58172
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 5124525,
        "vd": -56500
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 128,
      "originCoverType": 2,
      "originSongSimpleData": null,
      "tagPicList": null,
      "resourceState": true,
      "version": 6,
      "songJumpInfo": null,
      "entertainmentTags": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "mv": 0,
      "publishTime": 0
    },
    {
      "name": "果汁分你一半（翻自 花儿乐队） ",
      "id": 1413748243,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 34031708,
          "name": "一只怪兽叭",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 0,
      "v": 4,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 84029574,
        "name": "送给奥特曼",
        "picUrl": "https://p2.music.126.net/V43lL-bwTa9PK6-Y4_zl5A==/109951164599230577.jpg",
        "tns": [],
        "pic_str": "109951164599230577",
        "pic": 109951164599230580
      },
      "dt": 70991,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 2841645,
        "vd": 33481
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 1705005,
        "vd": 36120
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 1136685,
        "vd": 37979
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 2,
      "originSongSimpleData": null,
      "tagPicList": null,
      "resourceState": true,
      "version": 4,
      "songJumpInfo": null,
      "entertainmentTags": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mst": 9,
      "cp": 0,
      "rtype": 0,
      "rurl": null,
      "mv": 0,
      "publishTime": 0
    }
  ],
  currentSongIndex:0,
  currentSong: {},
  sequence:0 //0 单曲 1 循环
};

export const reducer: Reducer<IPlayerBarState> = (
  state = defaultState,
  action: any
) => {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return { ...state, currentSong: action.currentSong };
    case actionTypes.CHANGE_PLAY_LIST:
      return {...state,playList:action.playList}
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return {...state,currentSongIndex:action.currentSongIndex}
    case actionTypes.CHANGE_SEQUENCE:
      return {...state,sequence: action.sequence}
    default:
      return state;
  }
};
