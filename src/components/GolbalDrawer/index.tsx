import React, { memo, useState } from "react";

import { Button, Drawer, DrawerProps } from "antd";
import "./index.less";

interface IGolbalDrawerProps {
  icon?: React.ReactElement;
}

const GolbalDrawer: React.FC<IGolbalDrawerProps & DrawerProps> = memo(
  (props) => {
    const { children, icon, ...drawerProps } = props;
    const [visible, setVisible] = useState(false);

    return (
      <div className="golbal-drawer-wraper">
        <Button
          type="primary"
          shape="circle"
          className="drawer-trigger"
          onClick={() => setVisible(true)}
        >
          {icon}
        </Button>
        <Drawer
          visible={visible}
          onClose={() => setVisible(false)}
          getContainer={false}
          destroyOnClose
          {...drawerProps}
        >
          {children}
        </Drawer>
      </div>
    );
  }
);

export default GolbalDrawer;
