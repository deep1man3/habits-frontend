import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(4, 0, 0, 0),
      padding: theme.spacing(0),
    },
    padding: theme.spacing(2, 8),
    marginLeft: 240 + theme.spacing(8),
    height: '100vh',
  },
}));
