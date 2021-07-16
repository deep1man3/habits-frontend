import { Habit } from '../habits.types';
import { Measure } from '../measure.types';
import { User } from '../auth.types';

export type HabitsResponseDTO = Habit & {
  measure: Measure | number;
  user: User | number;
};
