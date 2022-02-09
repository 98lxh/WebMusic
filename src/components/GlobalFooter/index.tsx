import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { IRootState } from "../../store/reducer";
import "./index.less";
const GlobalFooter: React.FC = memo(() => {
  const { themeDark } = useSelector(
    (state: IRootState) => ({
      themeDark: state.app.themeDark,
    }),
    shallowEqual
  );
  return <div className={`footer-wrapper ${themeDark && "dark"}`}></div>;
});

export default GlobalFooter;
