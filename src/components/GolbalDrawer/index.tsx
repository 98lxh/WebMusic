import React, { memo, useState } from "react";

import { Button, Drawer, DrawerProps } from "antd";
import "./index.less";

interface IGolbalDrawerProps {
  triggerTitle?: string;
}
const GolbalDrawer: React.FC<IGolbalDrawerProps & DrawerProps> = memo(
  (props) => {
    const { children, triggerTitle, ...drawerProps } = props;
    const [visible, setVisible] = useState(false);

    return (
      <div className="golbal-drawer-wraper">
        <Button
          type="primary"
          className="drawer-trigger"
          onClick={() => setVisible(true)}
        >
          {triggerTitle!.split("").map((ch, index) => (
            <div key={index}>{ch}</div>
          ))}
        </Button>
        <Drawer
          visible={visible}
          onClose={() => setVisible(false)}
          {...drawerProps}
        >
          {children}
        </Drawer>
      </div>
    );
  }
);
GolbalDrawer.defaultProps = {
  triggerTitle: "展开",
};

export default GolbalDrawer;
