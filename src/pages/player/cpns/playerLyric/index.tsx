import React, { memo } from "react";

import "./index.less";
import { useSelector } from "react-redux";
import { IRootState } from "../../../../store/reducer";
interface IPlayerLyricProps {
  lyricIndex: number;
}

const PlayerLyric: React.FC<IPlayerLyricProps> = memo((props) => {
  const { lyricIndex } = props;
  const { lyricList } = useSelector((state: IRootState) => ({
    lyricList: state.playerBar.currentLyric,
  }));
  return (
    <div className="player-lyric-wrapper">
      <p>
        {lyricList.length > 0 &&
          lyricIndex !== -1 &&
          lyricList[lyricIndex] &&
          lyricList[lyricIndex].content}
      </p>
    </div>
  );
});

export default PlayerLyric;
