import React, { useState } from 'react';
import {
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useForm, Controller } from 'react-hook-form';
import FormWrapper from '../../components/lowLevel/FormWrapper';
import Button from '../../components/lowLevel/Button';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { control, handleSubmit } = useForm();

  return (
    <>
      <FormWrapper>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" align="center" color="primary">
                Авторизация
              </Typography>
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
                render={({ field }) => (
                  <TextField
                    // eslint-disable-next-line
                    {...field}
                    id="password"
                    label="Ваш пароль"
                    autoComplete="password"
                    variant="outlined"
                    type={showPassword ? 'text' : 'password'}
                    required
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword((prev) => !prev)}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
            </Grid>
            <Button>Войти</Button>
          </Grid>
        </form>
      </FormWrapper>
    </>
  );
};

export default SignIn;
