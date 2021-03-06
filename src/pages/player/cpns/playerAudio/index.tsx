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
    props,
    ref
  ) => {
    const {
      setIsPlay,
      setProgress,
      isChange,
      setCurrentTime,
      currentTime,
      currentLyricIndex,
      setCurrentLyricIndex,
    } = props
    const audioRef = useRef<HTMLAudioElement>(null);
    const dispatch = useDispatch();

    const { currentSong, sequence, playList, lyric } = useSelector(
      (state: IRootState) => ({
        currentSong: state.playerBar.currentSong as any,
        playList: state.playerBar.playList,
        sequence: state.playerBar.sequence,
        lyric: state.playerBar.currentLyric,
      }),
      shallowEqual
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
      const list = [...playList];
      list.length && dispatch(getSongDetailAction(list[0], list[0].origin));
    }, [dispatch]); //eslint-disable-line

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

    const duration = currentSong.duration || 0;

    const timeUpdate = (event: React.UIEvent<HTMLAudioElement>) => {
      if (isChange) return;
      setCurrentTime(event.currentTarget.currentTime * 1000);
      setProgress((currentTime / duration) * 100);

      //??????????????????
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

    //??????????????????
    const handleEnded = () => {
      if (sequence === 0 || playList.length === 1) {
        //????????????
        audioRef.current!.play();
      } else {
        //???????????????
        dispatch(changeCurrentSong("next"));
      }
    };

    return (
      <audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={handleEnded} />
    );
  }
);

export default memo(PlayerAudio);
