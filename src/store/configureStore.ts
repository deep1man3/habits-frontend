import { combineReducers, configureStore } from '@reduxjs/toolkit';
import auth from './auth/slice';

const reducer = combineReducers({
  auth,
});

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof reducer>;

export default store;
