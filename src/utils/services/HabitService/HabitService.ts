import $api from '../../api';
import store from '../../../store';
import { habitsActions } from '../../../store/habits/slice';
import {
  CreateHabitDTO,
  HabitsResponseDTO,
} from '../../../types/DTO/HabitsResponseDTO';

export default class HabitService {
  static async getHabits(): Promise<void> {
    if (localStorage.getItem('habits:token')) {
      const response = await $api.get<HabitsResponseDTO[]>('/habits');
      store.dispatch(habitsActions.setHabits(response.data));
    }
  }

  static async createHabit(
    data: CreateHabitDTO,
    onFinally?: () => void
  ): Promise<void> {
    if (localStorage.getItem('habits:token')) {
      const Habit = {
        ...data,
        increasePerStep: data.increasePerStep || 0,
        increaseInterval: data.increaseInterval || 0,
        count: data.count || 0,
        measure: data.measure || 0,
      };
      await $api
        .post<CreateHabitDTO>('/habits/create', Habit)
        .then(() => this.getHabits())
        .finally(() => onFinally && onFinally());
    }
  }
}
