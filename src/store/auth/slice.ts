import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  authenticated: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default slice;
