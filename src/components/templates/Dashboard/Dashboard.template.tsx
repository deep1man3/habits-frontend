import React, { PropsWithChildren } from 'react';

const DashboardTemplate = ({ children }: PropsWithChildren<unknown>) => {
  console.log('DashboardTemplate: re-render');

  return (
    <div>
      Dashboard
      {children}
    </div>
  );
};

export default DashboardTemplate;
