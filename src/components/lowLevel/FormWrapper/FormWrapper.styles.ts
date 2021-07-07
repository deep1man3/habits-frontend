import { makeStyles } from '@material-ui/core';

export const useStyles = (maxWidth: number, boxShadow: string) =>
  makeStyles((theme) => ({
    root: {
      height: '100%',
    },
    form: {
      padding: theme.spacing(2),
      border: '1px solid #E0E0E0',
      maxWidth,
      boxShadow,
    },
  }));
