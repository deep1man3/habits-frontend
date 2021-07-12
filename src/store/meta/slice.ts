import { createSlice } from '@reduxjs/toolkit';
import { MenuState } from '../../types/menu.types';

const initialState: MenuState = {
  mobileOpen: false,
  desktopOpen: false,
};

const slice = createSlice({
  name: 'meta',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.mobileOpen = !state.mobileOpen;
    },
    toggleDesktopMenu: (state) => {
      state.desktopOpen = !state.desktopOpen;
    },
  },
});

export const metaActions = slice.actions;

export default slice.reducer;
