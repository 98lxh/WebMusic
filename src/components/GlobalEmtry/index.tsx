import React from "react";

import { Empty } from "antd";
import "./index.less";

const GolbalEmtry = () => {
  return (
    <div className="golbal-emtry-wrapper">
      <Empty
        className="emtry"
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        description={<a href="/">该功能正在开发中,点击返回首页</a>}
      />
    </div>
  );
};

export default GolbalEmtry;
