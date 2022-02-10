import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { IRootState } from "./../../../../store/reducer";
import SettingButton from "../settingButton";
import { useDispatch } from "react-redux";
import { changeShowPlayerAction } from "../../../../pages/player/store/actionCreators";
const SettingPlayer = memo(() => {
  const dispatch = useDispatch();
  const { isShowPlayer } = useSelector(
    (state: IRootState) => ({
      isShowPlayer: state.playerBar.isShowPlayer,
    }),
    shallowEqual
  );
  return (
    <SettingButton
      defaultActive={isShowPlayer!}
      activeIcon={
        <i
          className="iconfont icon-a-yinlebofangliebiaoyinle"
          style={{ fontWeight: "bolder" }}
        />
      }
      icon={<i className="iconfont icon-a-yinlebofangliebiaoyinle" />}
      onChangeActive={(active) => {
        dispatch(changeShowPlayerAction(active));
      }}
    />
  );
});

export default SettingPlayer;
