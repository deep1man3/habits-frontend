import { combineReducers, configureStore } from '@reduxjs/toolkit';

const reducer = combineReducers({});

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof reducer>;

export default store;
