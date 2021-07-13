import React, { PropsWithChildren } from 'react';
import Drawer from '../../lowLevel/Drawer';

const DashboardTemplate = ({ children }: PropsWithChildren<unknown>) => (
  <div>
    <Drawer>123</Drawer>
    {children}
  </div>
);

export default DashboardTemplate;
