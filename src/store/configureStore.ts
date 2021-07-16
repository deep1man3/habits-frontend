import { combineReducers, configureStore } from '@reduxjs/toolkit';
import auth from './auth';
import meta from './meta';
import habits from './habits';

const reducer = combineReducers({
  auth,
  meta,
  habits,
});

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof reducer>;

export default store;
