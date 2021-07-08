import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, UserData } from '../../types/auth.types';

const initialState: AuthState = {
  user: null,
  authenticated: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserData>) => {
      state.user = action.payload;
      state.authenticated = true;
    },
  },
});

export const { setUser } = slice.actions;

export default slice.reducer;
