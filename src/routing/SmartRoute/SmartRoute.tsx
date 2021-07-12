import React, { FC, PropsWithChildren } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from '../../store';
import { PrivacyType } from '../../types/routes.types';

interface SmartRouteProps {
  path: string;
  exact: boolean;
  page: FC;
  privacyType?: PrivacyType;
}

const SmartRoute = ({
  path,
  exact,
  page: Page,
  privacyType = PrivacyType.Public,
}: PropsWithChildren<SmartRouteProps>) => {
  const { user } = useSelector((state) => state.auth);

  /** Если пользователь авторизован и тип роута ссесия,
   *  то сделать редирект на HomePage
   * */
  if (privacyType === PrivacyType.Session && !!user) {
    return <Redirect to="/" />;
  }

  /** Если пользователь не авторизован и тип роута приват,
   *  то сделать редирект на HomePage
   *  TODO: Сделать 403 страницу и редиркт на нее
   */
  if (privacyType === PrivacyType.Private && !user) {
    return <Redirect to="/" />;
  }

  /** Публичные роуты доступны всем */
  return <Route path={path} exact={exact} render={() => <Page />} />;
};

export default SmartRoute;
