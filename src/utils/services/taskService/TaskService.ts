import $api from '../../api';
import { TaskResponseDTO } from '../../../types/DTO/TaskResponseDTO';
import store from '../../../store';
import { tasksActions } from '../../../store/tasks/slice';

export default class TaskService {
  static async getTasks(
    onSuccess?: () => void,
    onFinally?: () => void
  ): Promise<void> {
    const response = await $api.get<TaskResponseDTO[]>('/tasks').finally(() => {
      onFinally && onFinally();
    });

    store.dispatch(tasksActions.setTasks(response.data));
    onSuccess && onSuccess();
  }
}
