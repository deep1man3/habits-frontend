import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TasksState } from '../../types/tasks.types';

const initialState: TasksState = [];

const slice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks(state, { payload }: PayloadAction<Task[]>) {
      state = payload;
    },
  },
});

export const tasksActions = slice.actions;

export default slice.reducer;
