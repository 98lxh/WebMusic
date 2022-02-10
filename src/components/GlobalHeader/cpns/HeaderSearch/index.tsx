import React, { useState } from "react";

import { Input } from "antd";
import { useNavigate } from "react-router";
import "./index.less";
import { useSelector } from "react-redux";
import { IRootState } from "../../../../store/reducer";

const HeaderSearch: React.FC = () => {
  const navigate = useNavigate();
  const { isDark } = useSelector((state: IRootState) => ({
    isDark: state.app.themeDark,
  }));
  const [keyword, setKeyword] = useState("");
  const handleSearch = () => {
    if (!keyword.trim()) {
      return;
    }
    navigate(`/search/${keyword}`);
    setKeyword("");
  };
  return (
    <div className={`header-search-wrapper ${isDark && "dark"}`}>
      <Input.Search
        className="header-search"
        placeholder="音乐/视频/电台/用户"
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
