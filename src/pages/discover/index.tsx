import React, { memo } from "react";
import { Outlet } from "react-router";

const Discover: React.FC = memo(() => {
  return (
    <div className="discover-wrapper">
      <Outlet />
    </div>
  );
});

export default Discover;
