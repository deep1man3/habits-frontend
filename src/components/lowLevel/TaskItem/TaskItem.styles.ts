import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(2),
      textAlign: 'center',
    },
    marginBottom: theme.spacing(2),
  },
  img: {
    height: '100px',
  },
  label: {
    marginBottom: theme.spacing(2),
  },
  task: {
    minHeight: '150px',
  },
}));
