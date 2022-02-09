import React, { useEffect, useState } from "react";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import "./index.less";

const HeaderSearch: React.FC = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const handleSearch = () => {
    if (!keyword.trim()) {
      return;
    }
    navigate(`/search/${keyword}`);
    setKeyword("");
  };
  return (
    <div className="header-search-wrapper">
      <Input.Search
        className="header-search"
        placeholder="音乐/视频/电台/用户"
        value={keyword}
        onSearch={handleSearch}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        prefix={<SearchOutlined />}
      />
    </div>
  );
};

export default HeaderSearch;
