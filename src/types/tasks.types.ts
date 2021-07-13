import Habit from './habits.types';

export interface TasksState {
  tasks: Task[] | null;
}

export interface Task {
  id: number;
  done: boolean;
  donePercent: number | null;
  completeDate: Date | null;
  habit: Habit;
}
