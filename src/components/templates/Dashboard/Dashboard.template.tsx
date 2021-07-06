import React, { PropsWithChildren } from 'react';

const DashboardTemplate = ({ children }: PropsWithChildren<unknown>) => (
  <div>
    Dashboard
    {children}
  </div>
);

export default DashboardTemplate;
