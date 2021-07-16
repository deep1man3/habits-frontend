import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Habit, HabitsState } from '../../types/habits.types';

const initialState: HabitsState = {
  habits: null,
};

const slice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    setHabits: (state, { payload }: PayloadAction<Habit[] | null>) => {
      state.habits = payload;
    },
  },
});

export const habitsActions = slice.actions;

export default slice.reducer;
