import React, { useState } from 'react';
import { Slider } from '@material-ui/core';
import Dialog from '../../../lowLevel/Dialog';
import { Task } from '../../../../types/tasks.types';
import TaskService from '../../../../utils/services/taskService';

interface DialogProgressDoneTaskProps {
  task: Task;
  open: boolean;
  handleClose: () => void;
}

const DialogProgressDoneTask = ({
  task,
  open,
  handleClose,
}: DialogProgressDoneTaskProps) => {
  const [value, setValue] = useState<number>(50);

  const handleChange = (event: object, newValue: number | number[]) => {
    setValue(+newValue);
  };

  const fetchUpdateTask = () => {
    TaskService.updateTask(
      {
        ...task,
        done: true,
        donePercent: value,
        completeDate: new Date(),
      },
      handleClose
    );
  };

  return (
    <Dialog
      open={open}
      title="Выполнение цели"
      description="Отметьте на сколько процентов ваша цель была выполнена"
      onSuccess={fetchUpdateTask}
      onClose={handleClose}
    >
      <Slider
        valueLabelDisplay="auto"
        defaultValue={100}
        step={10}
        marks
        min={0}
        max={200}
        onChange={handleChange}
      />
    </Dialog>
  );
};

export default DialogProgressDoneTask;
