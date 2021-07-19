import React, { PropsWithChildren, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import AuthService from '../../../utils/services/AuthService';

const Preloader = ({ children }: PropsWithChildren<unknown>) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Получения пользователя из токена
    AuthService.getUserByParseToken();
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      {children}
    </>
  );
};

export default Preloader;
