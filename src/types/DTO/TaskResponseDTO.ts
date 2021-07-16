import { Habit } from '../habits.types';

export interface TaskResponseDTO {
  id: number;
  done: boolean;
  donePercent: number | null;
  completeDate: Date | null;
  habit: Habit;
}

export type CreateTaskDTO = Omit<TaskResponseDTO, 'id'>