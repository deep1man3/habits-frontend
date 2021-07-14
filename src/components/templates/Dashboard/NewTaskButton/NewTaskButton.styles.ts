import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(8),
    right: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      bottom: theme.spacing(4),
      right: theme.spacing(4),
    },
  },
}));
