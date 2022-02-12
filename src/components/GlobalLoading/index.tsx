import React, { memo } from "react";
import "./index.less";

interface IGolbalLoadingProps {
  type?: "local" | "golbal";
}

const GolbalLoading: React.FC<IGolbalLoadingProps> = memo((props) => {
  const { type } = props;
  return (
    <div className={`loading-wrapper ${type === "golbal" && "golbal-loading"}`}>
      <div className="loading"></div>
    </div>
  );
});

GolbalLoading.defaultProps = {
  type: "local",
};

export default GolbalLoading;
