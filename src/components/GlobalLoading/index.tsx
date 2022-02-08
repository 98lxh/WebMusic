import React, { memo } from "react";
import "./index.less";

const GolbalLoading: React.FC = memo(() => {
  return (
    <div className="loading-wrapper">
      <div className="loading"></div>
      <p>加载中,请耐心等待...</p>
    </div>
  );
});

export default GolbalLoading;
