import React, { useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import TaskItem from '../TaskItem';
import TaskService from '../../../utils/services/taskService';
import { useSelector } from '../../../store';

const TasksList = () => {
  const { tasks } = useSelector((state) => state.tasks);

  useEffect(() => {
    if (localStorage.getItem('habits:token')) {
      TaskService.getTasks();
    }
  }, []);

  if (!tasks) {
    return <Typography>Ваш список задач пуст!</Typography>;
  }

  return (
    <Grid container justify="center">
      {tasks &&
        tasks.length > 0 &&
        tasks.map((task) => <TaskItem key={task.id} {...task} />)}
    </Grid>
  );
};
export default TasksList;
