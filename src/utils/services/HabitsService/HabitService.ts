import $api from '../../api';
import store from '../../../store';
import { habitsActions } from '../../../store/habits/slice';
import { HabitsResponseDTO } from '../../../types/DTO/HabitsResponseDTO';

export default class HabitService {
  static async getHabits(
    onSuccess?: () => void,
    onFinally?: () => void
  ): Promise<void> {
    const response = await $api
      .get<HabitsResponseDTO[]>('/habits')
      .finally(() => {
        onFinally && onFinally();
      });
    store.dispatch(habitsActions.setHabits(response.data));
    onSuccess && onSuccess();
  }
}
