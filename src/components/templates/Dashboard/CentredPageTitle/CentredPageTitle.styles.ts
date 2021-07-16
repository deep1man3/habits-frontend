import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
  typographyTitle: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
    },
  },
}));
