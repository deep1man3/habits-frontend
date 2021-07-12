import React, { PropsWithChildren } from 'react';
import Drawer from '../../lowLevel/Drawer/Drawer';

const DashboardTemplate = ({ children }: PropsWithChildren<unknown>) => {
  console.log('DashboardTemplate: re-render');

  return (
    <div>
      Dashboard
      <Drawer>123</Drawer>
      {children}
    </div>
  );
};

export default DashboardTemplate;
