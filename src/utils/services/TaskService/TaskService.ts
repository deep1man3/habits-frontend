import $api from '../../api';
import {
  CreateTaskDTO,
  TaskResponseDTO,
} from '../../../types/DTO/TaskResponseDTO';
import store from '../../../store';
import { tasksActions } from '../../../store/tasks/slice';

export default class TaskService {
  static async createTask(data: CreateTaskDTO): Promise<void> {
    await $api.post<CreateTaskDTO>('/tasks/create', data);
  }

  static async getTask(): Promise<void> {
    const response = await $api.get<TaskResponseDTO[]>('/tasks');
    store.dispatch(tasksActions.setTasks(response.data));
  }
}
