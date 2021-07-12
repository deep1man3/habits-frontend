import React from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import AuthService from '../../utils/services';
import CentredPageContentWrapper from '../../components/lowLevel/CentredPageContentWrapper/CentredPageContentWrapper';
import SubmitFormButton from '../../components/lowLevel/SubmitFormButton';

const SignUp = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log('SignUp: re-render');

  return (
    <CentredPageContentWrapper>
      <form
        onSubmit={handleSubmit((data) =>
          AuthService.createUser(data.name, data.email, data.password).then(
            (response) => console.log(response)
          )
        )}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center" color="primary">
              Регистрация
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Controller
              control={control}
              defaultValue=""
              name="name"
              render={({ field }) => (
                <TextField
                  {...field}
                  id="name"
                  label="Ваше имя"
                  autoComplete="name"
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  variant="outlined"
                  required
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              control={control}
              defaultValue=""
              name="email"
              render={({ field }) => (
                <TextField
                  {...field}
                  id="email"
                  label="Ваш email"
                  autoComplete="email"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  variant="outlined"
                  required
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              control={control}
              defaultValue=""
              name="password"
              rules={{
                validate: (value) =>
                  value === watch('confirmPassword') || 'Пароли не совпадают',
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="password"
                  label="Введите пароль"
                  autoComplete="password"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  variant="outlined"
                  type="password"
                  required
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              control={control}
              defaultValue=""
              name="confirmPassword"
              rules={{
                validate: (value) =>
                  value === watch('password') || 'Пароли не совпадают',
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="confirmPassword"
                  label="Повторите пароль"
                  autoComplete="password"
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword?.message}
                  variant="outlined"
                  type="password"
                  required
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <SubmitFormButton disabled={false}>
              Зарегистрироваться
            </SubmitFormButton>
          </Grid>
        </Grid>
      </form>
    </CentredPageContentWrapper>
  );
};

export default SignUp;
