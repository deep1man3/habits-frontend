import $api from '../../api';
import { CreateTaskDTO } from '../../../types/DTO/TaskResponseDTO';

export default class TaskService {
  static async createTask(
    data: CreateTaskDTO,
    onSuccess?: () => void,
    onFinally?: () => void
  ): Promise<void> {
    const response = await $api
      .post<CreateTaskDTO>('/tasks/create', data)
      .finally(() => {
        onFinally && onFinally();
      });
    console.log(response);
    onSuccess && onSuccess();
  }
}
