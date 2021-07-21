export interface HabitsState {
  habits: Habit[] | null;
  habitsIdCompletedToday: number[];
}

export interface Habit {
  id: number;
  name: string;
  description: string;
  type: HabitType;
  count: number;
  increasePerStep: number;
  increaseInterval: number; // in minutes
  dateTo: Date;
}

export enum HabitType {
  Common,
  WithProgress,
}

export type CreateHabitDirtyFormData = {
  id: number;
  name: string;
  description: string;
  type: HabitType;
  dateTo: Date;
  increasePerStep?: number;
  increaseInterval?: number;
  count?: number;
  measure?: number;
};
