import React, { memo, useEffect } from "react";
import { Outlet } from "react-router";
import request from "../../service/request";

const Discover: React.FC = memo(() => {
  useEffect(() => {
    request({
      url: "banner",
    });
  }, []);
  return (
    <div className="discover-wrapper">
      <Outlet />
    </div>
  );
});

export default Discover;
