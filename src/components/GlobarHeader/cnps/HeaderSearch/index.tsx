import React from "react";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const HeaderSearch: React.FC = () => {
  return (
    <Input
      className="header-search"
      placeholder="音乐/视频/电台/用户"
      prefix={<SearchOutlined />}
    />
  );
};

export default HeaderSearch;
