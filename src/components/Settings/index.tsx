import React, { useState } from "react";
import SettingPlayer from "./cpns/settingPlayer";
import SettingButton from "./cpns/settingButton";
import SettingTheme from "./cpns/settingTheme";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import "./index.less";

const Setting: React.FC = () => {
  const [isShowAllSettings, setShowAllSettings] = useState(false);
  return (
    <div className="setting-wrapper">
      <div className={`setting-all ${isShowAllSettings && "show"}`}>
        <SettingTheme />
        <SettingPlayer />
      </div>
      <SettingButton
        defaultActive={false}
        activeIcon={<CloseOutlined />}
        icon={<CheckOutlined />}
        onChangeActive={(active) => {
          setShowAllSettings(active);
        }}
      />
    </div>
  );
};

export default Setting;
