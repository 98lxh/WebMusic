import React, { memo } from "react";
import Banner from "./cpns/Banner";

const Recommend: React.FC = () => {


  return (
    <div className="recommend-wrapper">
      <Banner />
    </div>
  );
};

export default memo(Recommend);
