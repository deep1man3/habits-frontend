import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
    marginBottom: theme.spacing(2),
  },
  icon: {
    fontSize: '128px',
    [theme.breakpoints.down('md')]: {
      fontSize: '64px',
    },
  },
  label: {
    marginBottom: theme.spacing(2),
    width: '100%',
  },
  description: {
    width: '100%',
  },
  task: {
    minHeight: '150px',
  },
}));
