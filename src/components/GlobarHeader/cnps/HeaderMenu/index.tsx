import React from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import { headerLinks } from "../../../../common/local-date";

const HeaderMenu: React.FC = () => {
  return (
    <Menu className="content-left" mode="horizontal" defaultActiveFirst>
      {headerLinks.map((route) => (
        <Menu.Item key={route.title}>
          <NavLink to={route.link}>{route.title}</NavLink>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default HeaderMenu;
