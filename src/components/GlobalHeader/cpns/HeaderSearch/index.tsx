import React, { useState } from "react";

import { Input } from "antd";
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
        className={`header-search`}
        placeholder="输入音乐/歌手/专辑.."
        value={keyword}
        onSearch={handleSearch}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      />
    </div>
  );
};

export default HeaderSearch;
