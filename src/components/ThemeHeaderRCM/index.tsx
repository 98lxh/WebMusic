import React, { memo } from "react";
import { ArrowRightOutlined, RightCircleOutlined } from "@ant-design/icons";

import "./index.less";

type RCMKeywordType = {
  name: string;
  url: string;
};

interface IThemeHeaderRCMProsp {
  title: string;
  keywords?: RCMKeywordType[];
}

const ThemeHeaderRCM: React.FC<IThemeHeaderRCMProsp> = memo((props) => {
  const { title, keywords } = props;

  const renderKeyword = () =>
    keywords!.map((keyword, index) => (
      <div className="keyword" key={index}>
        <span>|</span>
        <a href={keyword.url}>{keyword.name}</a>
      </div>
    ));
  return (
    <div className="rcm-header-wrapper">
      <div className="left">
        <RightCircleOutlined className="icon" />
        <h3 className="title">{title}</h3>
        <div className="keyword-container">{keywords && renderKeyword()}</div>
      </div>
    </div>
  );
});

export default ThemeHeaderRCM;
