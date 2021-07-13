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
    const TasksArray = response.data.map((task) => ({
      id: task.id,
      done: task.done,
      donePercent: task.donePercent,
      completeDate: task.completeDate,
      habit: task.habit,
    }));
    store.dispatch(tasksActions.setTasks(TasksArray));
    onSuccess && onSuccess();
  }
}
