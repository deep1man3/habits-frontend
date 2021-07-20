import React, { PropsWithChildren, useEffect } from 'react';
import DashboardTemplate from './Dashboard.template';
import HabitService from '../../../utils/services/HabitService/HabitService';
import TaskService from '../../../utils/services/TaskService';
import MeasureService from '../../../utils/services/MeasureService';

const DashboardContainer = ({ children }: PropsWithChildren<unknown>) => {
  useEffect(() => {
    // Получения tasks пользователя
    TaskService.getTasks();
    // Получения habits пользователя
    HabitService.getHabits();
    // Получения measures
    MeasureService.getMeasures();
  }, []);

  return <DashboardTemplate>{children}</DashboardTemplate>;
};

export default DashboardContainer;
