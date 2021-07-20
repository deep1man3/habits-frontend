import { Habit, HabitType } from '../habits.types';
import { Measure } from '../measure.types';
import { User } from '../auth.types';

export type HabitsResponseDTO = Habit & {
  measure: Measure | number;
  user: User | number;
};

export interface CreateHabitDTO {
  id: number;
  name: string;
  description: string;
  type: HabitType;
  dateTo: Date;
  increasePerStep?: number;
  increaseInterval?: number; // in minutes
  count?: number;
  measure?: number;
}
