import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { IRootState } from "./../../../../store/reducer";
import { changeThemeDrakAction } from "./../../../../store/actionCreators";
import SettingButton from "../settingButton";
import { useDispatch } from "react-redux";
const SettingTheme = memo(() => {
  const dispatch = useDispatch();
  const { isDark } = useSelector(
    (state: IRootState) => ({
      isDark: state.system.themeDark,
    }),
    shallowEqual
  );
  return (
    <SettingButton
      defaultActive={isDark!}
      activeIcon={<i className="iconfont icon-heiyemoshi" />}
      icon={<i className="iconfont icon-wb_sunny" />}
      onChangeActive={(active) => {
        dispatch(changeThemeDrakAction(active));
      }}
    />
  );
});

export default SettingTheme;
