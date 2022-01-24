import React, { memo } from "react";
import { HeaderMenu, HeaderSearch } from "./cnps";
import "./index.less";
const GlobalHeader: React.FC = memo(() => {
  return (
    <div className="muisc-header-wrapper">
      <div className="content">
        <div className="content-left">
          <HeaderMenu />
        </div>
        <div className="content-right">
          <HeaderSearch />
        </div>
      </div>
    </div>
  );
});

export default GlobalHeader;
