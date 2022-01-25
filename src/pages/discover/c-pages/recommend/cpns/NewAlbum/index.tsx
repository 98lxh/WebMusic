import React, { memo } from "react";
import ThemeHeaderRCM from "../../../../../../components/ThemeHeaderRCM";

const NewAlbum: React.FC = memo(() => {
  return (
    <div className="newalbum-wrapper">
      <ThemeHeaderRCM title="新碟上架" />
    </div>
  );
});

export default NewAlbum;
