import { Habit } from '../habits.types';

export interface TaskResponseDTO {
  id: number;
  done: boolean;
  donePercent: number | null;
  completeDate: string;
  habit: Habit;
}

export type CreateTaskDTO = Omit<TaskResponseDTO, 'id'>