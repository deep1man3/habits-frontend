import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(4, 0, 0, 0),
    },
    margin: theme.spacing(2),
    marginLeft: 240,
  },
}));
