import React, { memo } from "react";
import "./index.less";

const GolbalLoading: React.FC = memo(() => {
  return (
    <div className="loading-wrapper">
      <div className="loading"></div>
    </div>
  );
});

export default GolbalLoading;
