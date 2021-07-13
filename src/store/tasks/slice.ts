import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TasksState } from '../../types/tasks.types';

const initialState: TasksState = {
  tasks: [],
};

const slice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks(state, { payload }: PayloadAction<Task[]>) {
      state.tasks = payload;
    },
  },
});

export const tasksActions = slice.actions;

export default slice.reducer;
