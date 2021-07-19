import $api from '../../api';
import store from '../../../store';
import { habitsActions } from '../../../store/habits/slice';
import { HabitsResponseDTO } from '../../../types/DTO/HabitsResponseDTO';

export default class HabitService {
  static async getHabits(): Promise<void> {
    if (localStorage.getItem('habits:token')) {
      const response = await $api.get<HabitsResponseDTO[]>('/habits');
      store.dispatch(habitsActions.setHabits(response.data));
    }
  }
}
