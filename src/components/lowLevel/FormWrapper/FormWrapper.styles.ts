import { makeStyles } from '@material-ui/core';

export const useStyles = (maxWidth: number) =>
  makeStyles((theme) => ({
    form: {
      padding: theme.spacing(2),
      maxWidth,
    },
  }));
