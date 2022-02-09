import React, { memo } from "react";
import { Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "../../../../store/reducer";
import "./index.less";

type HeaderMenuType = {
  title: string;
  link: string;
};

interface IHeaderMenuProps {
  menuList: HeaderMenuType[];
  height?: string;
}

const HeaderMenu: React.FC<IHeaderMenuProps> = memo((props) => {
  const { menuList, height } = props;
  const location = useLocation();
  const { themeDark } = useSelector((state: IRootState) => ({
    themeDark: state.app.themeDark,
  }));

  const menuStyle = () => ({
    height: height ? height : "4rem",
    lineHeight: height ? height : "4rem",
  });

  return (
    <Menu
      mode="horizontal"
      style={menuStyle()}
      className={`header-menu-wapper ${themeDark && "dark"}`}
      activeKey={location.pathname}
    >
      {menuList.map((route) => (
        <Menu.Item key={route.link}>
          <NavLink to={route.link}>{route.title}</NavLink>
        </Menu.Item>
      ))}
    </Menu>
  );
});

export default HeaderMenu;
