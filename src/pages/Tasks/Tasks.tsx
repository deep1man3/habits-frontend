import React from 'react';
import CentredPageTitle from '../../components/lowLevel/CentredPageTitle';
import TasksList from '../../components/templates/Dashboard/TasksList';
import NewTaskButton from '../../components/templates/Dashboard/NewTaskButton';

const Tasks = () => (
  <>
    <CentredPageTitle>Задания на сегодня</CentredPageTitle>
    <TasksList />
    <NewTaskButton />
  </>
);

export default Tasks;
