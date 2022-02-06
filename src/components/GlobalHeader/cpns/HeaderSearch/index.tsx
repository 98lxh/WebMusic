import React, {useEffect} from "react";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import {searchMusic_netease} from "../../../../service/module/netease/module/search";

const HeaderSearch: React.FC = () => {
  useEffect(()=>{
    searchMusic_netease('周杰伦').then(res => {
      console.log(res.data)
    })
  },[])
  return (
    <Input.Search
      className="header-search"
      placeholder="音乐/视频/电台/用户"
      prefix={<SearchOutlined />}
    />
  );
};

export default HeaderSearch;
