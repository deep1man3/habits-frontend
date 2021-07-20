import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Habit, HabitsState } from '../../types/habits.types';
import { tasksActions } from '../tasks/slice';
import { Task } from '../../types/tasks.types';
import { isToday } from '../../utils/helpers/date.helpers';

const initialState: HabitsState = {
  habits: null,
  habitsIdCompletedToday: [],
};

const slice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    setHabits: (state, { payload }: PayloadAction<Habit[] | null>) => {
      state.habits = payload;
    },
  },
  extraReducers: {
    [tasksActions.setTasks.type]: (
      state,
      { payload }: PayloadAction<Task[] | null>
    ) => {
      state.habitsIdCompletedToday =
        payload?.reduce((result: number[], task) => {
          if (isToday(task.completeDate)) {
            result.push(task.habit.id);
          }
          return result;
        }, []) || [];
    },
  },
});

export const habitsActions = slice.actions;

export default slice.reducer;
