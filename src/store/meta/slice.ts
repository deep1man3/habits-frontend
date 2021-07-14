import { createSlice } from '@reduxjs/toolkit';
import { MetaState } from '../../types/meta.types';

const initialState: MetaState = {
  isDrawerOpen: false,
};

const slice = createSlice({
  name: 'meta',
  initialState,
  reducers: {
    toggleDrawerOpen: (state) => {
      state.isDrawerOpen = !state.isDrawerOpen;
    },
  },
});

export const metaActions = slice.actions;

export default slice.reducer;
