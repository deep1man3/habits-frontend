import $api from '../../api';
import { CreateTaskDTO } from '../../../types/DTO/TaskResponseDTO';

export default class TaskService {
  static async createTask(
    data: CreateTaskDTO,
    onSuccess?: () => void,
    onFinally?: () => void
  ): Promise<void> {
    await $api.post<CreateTaskDTO>('/tasks/create', data).finally(() => {
      onFinally && onFinally();
    });
    onSuccess && onSuccess();
  }
}
