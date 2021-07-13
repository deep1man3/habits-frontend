import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import TaskService from '../../../utils/services/taskService';

const TasksList = () => {
  useEffect(() => {
    TaskService.getTasks(() => console.log('Задачи загрузились'));
  });

  return (
    <Grid container justify="center">
      {/* {tasks && tasks.length > 0 && tasks.map((task) => <TaskItem />)} */}
    </Grid>
  );
};

export default TasksList;
