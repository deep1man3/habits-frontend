import { combineReducers, configureStore } from '@reduxjs/toolkit';
import auth from './auth';
import meta from './meta';

const reducer = combineReducers({
  auth,
  meta,
});

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof reducer>;

export default store;
