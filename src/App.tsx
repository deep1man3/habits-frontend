import React, { useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import store from './store';
import Router from './routing';

const App = () => {
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
