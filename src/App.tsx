import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Router from './routing';
import Preloader from './components/lowLevel/Preloader';

const App = () => (
  <Provider store={store}>
    <Preloader>
      <Router />
    </Preloader>
  </Provider>
);

export default App;
