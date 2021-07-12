import React, { FC, PropsWithChildren } from 'react';
import { Redirect, Route } from 'react-router-dom';

interface SmartRouteProps {
  path: string;
  exact: boolean;
  page: FC;
  privacyType?: boolean;
}

const SmartRoute = ({
  path,
  exact,
  page: Page,
  privacyType,
}: PropsWithChildren<SmartRouteProps>) => {
  if (privacyType) {
    return <Redirect to="/" />;
  }

  return <Route path={path} exact={exact} render={() => <Page />} />;
};

export default SmartRoute;
