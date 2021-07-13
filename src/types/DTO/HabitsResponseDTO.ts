import { User } from '../auth.types';
import { MeasureResponseDTO } from './MeasureResponseDTO';
import Habit from '../habits.types';

export type HabitsResponseDTO = Habit & {
  measure: MeasureResponseDTO | number;
  user: User | number;
};
