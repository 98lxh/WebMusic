import React, {
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { IRootState } from "../../../../store/reducer";
import {
  changeCurrentSong,
  getSongDetailAction,
} from "../../store/actionCreators";

interface PlayerAudioProps {
  isPlay: boolean;
  setIsPlay: (value: boolean) => void;
  setProgress: (value: number) => void;
  currentTime: number;
  setCurrentTime: (value: number) => void;
  isChange: boolean;
  setCurrentLyricIndex: (value: number) => void;
  currentLyricIndex: number;
}

export interface IAudioRef {
  pause: () => void;
  play: () => void;
  setCurrentTime: (currentTime: number) => void;
}
const PlayerAudio = forwardRef<IAudioRef, PlayerAudioProps>(
  (
    {
      setIsPlay,
      setProgress,
      isChange,
      setCurrentTime,
      currentTime,
      currentLyricIndex,
      setCurrentLyricIndex,
    },
    ref
  ) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const { currentSong, sequence, playList, lyric } = useSelector(
      (state: IRootState) => ({
        currentSong: state.playerBar.currentSong as any,
        playList: state.playerBar.playList,
        sequence: state.playerBar.sequence,
        lyric: state.playerBar.currentLyric,
      }),
      shallowEqual
    );
    const duration = currentSong.duration || 0;
    const dispatch = useDispatch();

    useImperativeHandle<any, IAudioRef>(
      ref,
      () => ({
        setCurrentTime: (currentTime: number) => {
          audioRef.current!.currentTime = currentTime;
        },
        pause: () => {
          audioRef.current?.pause();
        },
        play: () => {
          audioRef.current?.play();
        },
      }),
      [audioRef]
    );

    useEffect(() => {
      audioRef.current!.src =
        currentSong.origin === "netease"
          ? "https://music.163.com/song/media/outer/url?id=" +
            currentSong.id +
            ".mp3"
          : "https://api.bbbug.com/api/song/playurl?mid=" + currentSong.id;
      audioRef
        .current!.play()
        .then(() => {
          setIsPlay(true);
        })
        .catch(() => {
          setIsPlay(false);
        });
    }, [currentSong, setIsPlay]);

    useEffect(() => {
      playList.length &&
        dispatch(getSongDetailAction(playList[0].id, playList[0].origin));
    }, [dispatch, playList[0]]);

    const timeUpdate = (event: React.UIEvent<HTMLAudioElement>) => {
      if (isChange) return;
      setCurrentTime(event.currentTarget.currentTime * 1000);
      setProgress((currentTime / duration) * 100);

      //获取当前歌词
      let lyricIndex = 0;
      for (let i = 0; i < lyric.length; i++) {
        let lyricItem = lyric[i];
        if (currentTime < lyricItem.time) {
          lyricIndex = i - 1;
          break;
        }
      }

      currentLyricIndex !== lyricIndex && setCurrentLyricIndex(lyricIndex);
    };

    //监听播放结束
    const handleEnded = () => {
      if (sequence === 0) {
        //单曲循环
        audioRef.current!.play();
      } else {
        //非单曲循环
        dispatch(changeCurrentSong("next"));
      }
    };

    return (
      <audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={handleEnded} />
    );
  }
);

export default memo(PlayerAudio);
