import React, { useState } from 'react';
import { Slider } from '@material-ui/core';
import Dialog from '../../../lowLevel/Dialog';
import { Habit } from '../../../../types/habits.types';

interface DialogProgressDoneTaskProps {
  habit: Habit;
  open: boolean;
  handleClose: () => void;
}

const DialogProgressDoneTask = ({
  habit,
  open,
  handleClose,
}: DialogProgressDoneTaskProps) => {
  const [value, setValue] = useState<number>(50);

  const handleChange = (event: object, newValue: number | number[]) => {
    setValue(+newValue);
  };

  return (
    <Dialog
      open={open}
      title="Выполнение цели"
      description="Отметьте на сколько процентов ваша цель была выполнена"
      onSuccess={() => console.log('success')}
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
