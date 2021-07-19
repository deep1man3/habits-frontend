import React, { PropsWithChildren, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import { authActions } from '../../../store/auth/slice';

const Preloader = ({ children }: PropsWithChildren<unknown>) => {
  const dispatch = useDispatch();

  /**
   * Проверка на наличие токена в localStorage и попытка
   * распарсить из него данные о пользователи.
   * */
  useEffect(() => {
    const b64Token = localStorage.getItem('habits:token');

    if (b64Token) {
      const JSONToken = Buffer.from(b64Token, 'base64').toString();
      try {
        const user = JSON.parse(JSONToken);
        dispatch(authActions.setUser(user));
      } catch (e) {
        console.error('Preloader: ', e);
      }
    }
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      {children}
    </>
  );
};

export default Preloader;
