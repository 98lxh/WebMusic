import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SettingFilled } from "@ant-design/icons";
import GolbalDrawer from "../GolbalDrawer";
import { Switch, List } from "antd";
import { IRootState } from "../../store/reducer";
import { changeShowPlayerAction } from "../../pages/player/store/actionCreators";
import "./index.less";
import { changeThemeDrakAction } from "../../store/actionCreators";

const Setting = () => {
  const dispatch = useDispatch();
  const { isShowPlayer, themeDark } = useSelector((state: IRootState) => ({
    isShowPlayer: state.playerBar.isShowPlayer,
    themeDark: state.app.themeDark,
  }));
  //显示隐藏播放栏
  const changeShowPlayer = () => {
    dispatch(changeShowPlayerAction(!isShowPlayer));
  };
  //黑夜模式
  const changeThemeDrak = () => {
    dispatch(changeThemeDrakAction(!themeDark));
  };
  return (
    <GolbalDrawer title="设置" icon={<SettingFilled />}>
      <List>
        <List.Item>
          <p>显示播放栏:</p>
          <Switch
            defaultChecked={isShowPlayer}
            onChange={changeShowPlayer}
          ></Switch>
        </List.Item>
        <List.Item>
          <p>黑夜模式:</p>
          <Switch
            defaultChecked={themeDark}
            onChange={changeThemeDrak}
          ></Switch>
        </List.Item>
      </List>
    </GolbalDrawer>
  );
};

export default Setting;
