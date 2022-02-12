import React from "react";

import { Empty } from "antd";
import "./index.less";
import { Link } from "react-router-dom";

const GolbalEmtry = () => {
  return (
    <div className="golbal-emtry-wrapper">
      <Empty
        className="emtry"
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        description={<Link to="/">该功能暂未开发,点击返回首页</Link>}
      />
    </div>
  );
};

export default GolbalEmtry;
