import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import store from './store';
import Router from './routing';
import Preloader from './components/lowLevel/Preloader';
import theme from './theme';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Preloader>
        <Router />
      </Preloader>
    </ThemeProvider>
  </Provider>
);

export default App;
