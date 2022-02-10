import React, { memo, Suspense } from "react";
import GlobalLoading from "../../components/GlobalLoading";
import { Outlet } from "react-router";

const Discover: React.FC = memo(() => {
  return (
    <div className="discover-wrapper">
      <Suspense fallback={<GlobalLoading type="golbal" />}>
        <Outlet />
      </Suspense>
    </div>
  );
});

export default Discover;
