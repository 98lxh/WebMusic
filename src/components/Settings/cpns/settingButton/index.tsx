import React, { memo, useState } from "react";
import { Button, ButtonProps } from "antd";
import "./index.less";

interface ISettingButtonProps {
  icon: React.ReactElement;
  activeIcon: React.ReactElement;
  defaultActive: boolean;
  onChangeActive: (activeState: boolean) => void;
}

const SettingButton: React.FC<ISettingButtonProps & ButtonProps> = memo(
  (props) => {
    const { icon, activeIcon, onChangeActive, defaultActive } = props;
    const [isActive, setIsActive] = useState(defaultActive);
    const handleClick = () => {
      const currentActive = isActive;
      setIsActive(!currentActive);
      onChangeActive(!currentActive);
    };
    return (
      <div className="setting-btn-wrapper">
        <Button
          type="primary"
          shape="circle"
          onClick={handleClick}
          icon={isActive ? activeIcon : icon}
        />
      </div>
    );
  }
);

export default SettingButton;
