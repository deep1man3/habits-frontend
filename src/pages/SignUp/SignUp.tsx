import React from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import FormWrapper from '../../components/lowLevel/FormWrapper';
import Button from '../../components/lowLevel/Button';
import AuthService from '../../utils/services';

const SignUp = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <>
      <FormWrapper>
        <form
          onSubmit={handleSubmit((data) =>
            AuthService.registration(data.name, data.email, data.password).then(
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
                    // eslint-disable-next-line
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
                    // eslint-disable-next-line
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
                    // eslint-disable-next-line
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
                    // eslint-disable-next-line
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
            <Button>Зарегистрироваться</Button>
          </Grid>
        </form>
      </FormWrapper>
    </>
  );
};

export default SignUp;
