import React, { useEffect, useState } from 'react';
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import { SubmitHandler, useForm } from 'react-hook-form';
import SubmitFormButton from '../../../lowLevel/SubmitFormButton';
import {
  CreateHabitDirtyFormData,
  HabitType,
} from '../../../../types/habits.types';
import { useStyles } from './NewTaskForm.styles';
import { useSelector } from '../../../../store';
import HabitService from '../../../../utils/services/HabitService';

const NewTaskForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const classes = useStyles();

  const { measures } = useSelector((state) => state.measures);

  const { handleSubmit, register, watch, unregister } = useForm();
  const taskType = watch('type');

  useEffect(() => {
    if (taskType === 0) {
      unregister(['measure', 'count', 'increaseInterval', 'increasePerStep']);
    }
  }, [taskType, unregister]);

  const handleCreateHabit: SubmitHandler<CreateHabitDirtyFormData> = (data) => {
    setIsLoading(true);
    HabitService.createHabit(data, () => setIsLoading(false));
  };

  return (
    <form onSubmit={handleSubmit(handleCreateHabit)}>
      <Grid container direction="column" justify="flex-start" spacing={2}>
        <Grid item>
          <Typography variant="h5" paragraph>
            Задай себе новую цель!
          </Typography>
          <Typography variant="body2" paragraph>
            Обычная цель – цель, которую нужно выполнять каждый день.
          </Typography>
          <Typography variant="body2" paragraph>
            Цель с прогрессией – цель, при которой нагрузка увеличивается через
            определённый промежуток времени.
          </Typography>
        </Grid>
        <Grid item className={classes.rowType}>
          <Select
            fullWidth
            variant="outlined"
            defaultValue={HabitType.Common}
            {...register('type', { value: HabitType.Common })}
          >
            <MenuItem value={HabitType.Common}>Обычная</MenuItem>
            <MenuItem value={HabitType.WithProgress}>С прогрессией</MenuItem>
          </Select>
        </Grid>
        <Grid item>
          <TextField
            {...register('name')}
            label="Название цели"
            variant="outlined"
            required
            fullWidth
          />
        </Grid>
        <Grid item>
          <TextField
            {...register('description')}
            label="Описание цели"
            variant="outlined"
            required
            fullWidth
            multiline
            rows={3}
          />
        </Grid>
        <Grid item>
          <TextField
            {...register('dateTo')}
            label="Дата"
            variant="outlined"
            required
            fullWidth
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            helperText="Дата окончания вашей цели"
          />
        </Grid>
        {taskType === 1 && (
          <>
            <Grid item container spacing={2}>
              <Grid item md={6} xs={12}>
                <TextField
                  {...register('increasePerStep')}
                  label="Увеличение за шаг"
                  variant="outlined"
                  type="number"
                  required
                  fullWidth
                  helperText="Насколько нужно увеличить нагрузку"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  {...register('increaseInterval')}
                  label="Интервал"
                  variant="outlined"
                  type="number"
                  required
                  fullWidth
                  helperText="Раз в какой срок (в днях) увеличивается нагрузка"
                />
              </Grid>
            </Grid>
            <Grid item container spacing={2}>
              <Grid item md={6} xs={12}>
                <TextField
                  {...register('count')}
                  label="Стартовое количество"
                  variant="outlined"
                  type="number"
                  required
                  fullWidth
                  helperText="С какой нагрузки начнётся цель"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel htmlFor="measure">Ед. измерения</InputLabel>
                  <Select
                    id="measure"
                    label="Ед. измерения"
                    defaultValue={measures && measures[0].id}
                    {...register('measure', {
                      value: measures && measures[0].id,
                    })}
                  >
                    {measures?.map((measure) => (
                      <MenuItem key={measure.id} value={measure.id}>
                        {measure.fullName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </>
        )}
        <Grid item>
          <SubmitFormButton disabled={isLoading}>Создать +</SubmitFormButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default NewTaskForm;
