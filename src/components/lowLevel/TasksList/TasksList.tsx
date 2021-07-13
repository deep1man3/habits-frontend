import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import TaskItem from '../TaskItem';
import TaskService from '../../../utils/services/taskService';
import { useSelector } from '../../../store';

const TasksList = () => {
  const { tasks } = useSelector((state) => state.tasks);

  useEffect(() => {
    TaskService.getTasks(() => console.log('Задачи загрузились'));
  }, []);

  return (
    <Grid container justify="center">
      {tasks &&
        tasks.length > 0 &&
        tasks.map((task) => <TaskItem key={task.id} {...task} />)}
    </Grid>
  );
};

export default TasksList;
