import React, { memo } from "react";
import { Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";

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

  const menuStyle = () => ({
    height: height ? height : "4rem",
    lineHeight: height ? height : "4rem",
  });

  return (
    <Menu mode="horizontal" style={menuStyle()} activeKey={location.pathname}>
      {menuList.map((route) => (
        <Menu.Item key={route.link}>
          <NavLink to={route.link}>{route.title}</NavLink>
        </Menu.Item>
      ))}
    </Menu>
  );
});

export default HeaderMenu;
