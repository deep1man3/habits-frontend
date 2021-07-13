import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDrawerOpen: false,
};

const slice = createSlice({
  name: 'meta',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isDrawerOpen = !state.isDrawerOpen;
    },
  },
});

export const metaActions = slice.actions;

export default slice.reducer;
