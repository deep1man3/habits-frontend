import React from 'react';
import CentredPageTitle from '../../components/lowLevel/CentredPageTitle';
import TasksList from '../../components/lowLevel/TasksList';

const Tasks = () => (
  <>
    <CentredPageTitle>Задания на сегодня</CentredPageTitle>
    <TasksList />
  </>
);

export default Tasks;
