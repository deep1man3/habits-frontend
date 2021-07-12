import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

const DashboardTemplate = ({ children }: PropsWithChildren<unknown>) => {
  console.log('DashboardTemplate: re-render');

  return (
    <div>
      Dashboard
      <Link to="/">Home</Link>
      {children}
    </div>
  );
};

export default DashboardTemplate;
