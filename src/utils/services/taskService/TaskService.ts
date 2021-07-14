import $api from '../../api';
import { TaskResponseDTO } from '../../../types/DTO/TaskResponseDTO';
import store from '../../../store';
import { tasksActions } from '../../../store/tasks/slice';
import { Task } from '../../../types/tasks.types';

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

  static async updateTask(data: Task, onSuccess?: () => void): Promise<void> {
    await $api
      .put(`/tasks/${data.id}/update`, data)
      .then(() => {
        this.getTasks();
        onSuccess && onSuccess();
      })
      .catch((e) => console.error('TaskService.updateTask:', e));
  }
}
