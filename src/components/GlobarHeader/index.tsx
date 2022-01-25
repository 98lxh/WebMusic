import React, { memo, useCallback, useMemo } from "react";
import { HeaderMenu, HeaderSearch } from "./cpns";
import { useLocation } from "react-router-dom";
import { headerLinks } from "../../common/local-date";

import "./index.less";
const GlobalHeader: React.FC = memo(() => {
  const { pathname } = useLocation();

  const mapPathToSubMenu = useCallback(() => {
    const menu = headerLinks.filter((route) =>
      pathname.includes(route.link)
    )[0];
    if (menu) return menu.children;
    return [];
  }, [pathname]);

  const subMenu = useMemo(() => mapPathToSubMenu(), [mapPathToSubMenu]);

  return (
    <div className="muisc-header-wrapper">
      <div className="content">
        <div className="content-menu">
          <div className="content-left">
            <HeaderMenu menuList={headerLinks} />
          </div>
          <div className="content-right">
            <HeaderSearch />
          </div>
        </div>
        <div className="content-submenu">
          {subMenu.length ? (
            <HeaderMenu height="2.5rem" menuList={subMenu} />
          ) : null}
        </div>
      </div>
    </div>
  );
});
export default GlobalHeader;
