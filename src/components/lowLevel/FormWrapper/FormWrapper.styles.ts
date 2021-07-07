import { makeStyles } from '@material-ui/core';

export const useStyles = (maxWidth: number, boxShadow: string) =>
  makeStyles((theme) => ({
    root: {
      height: 'calc(100% - 56px)',
    },
    form: {
      padding: theme.spacing(2),
      border: '1px solid #E0E0E0',
      maxWidth,
      boxShadow,
    },
    button: {
      marginTop: theme.spacing(2),
    },
  }));
