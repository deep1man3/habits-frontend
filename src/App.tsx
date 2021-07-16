import React, { useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import store from './store';
import Router from './routing';

const App = () => {
  /**
   * TODO Перенести это в Preloader/InitializeApp?
   * Поскольку нет ендпоинта на получения пользователя из токена (getUser)
   * при каждой перезагрузки приложения через F5, redux очищается
   * и остается токен в localStorage. Временное решение этой проблемы
   * очищения localStorage.clear().
   */
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <Provider store={store}>
      <CssBaseline />
      <Router />
    </Provider>
  );
};

export default App;
