import React, { memo } from "react";
import ThemeHeaderRCM from "../../../../../../components/ThemeHeaderRCM";

const HotRecommed: React.FC = memo(() => {
  return (
    <div className="hot-recommend-wrapper">
      <ThemeHeaderRCM
        title="热门推荐"
        keywords={[
          {
            name: "华语",
            url: "xxx",
          },
          {
            name: "华语",
            url: "xxx",
          },
          {
            name: "华语",
            url: "xxx",
          },
          {
            name: "华语",
            url: "xxx",
          },
        ]}
      />
    </div>
  );
});

export default HotRecommed;
