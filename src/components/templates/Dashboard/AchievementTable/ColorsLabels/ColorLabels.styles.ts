import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      justifyContent: 'center',
      padding: theme.spacing(2, 4),
    },
    padding: theme.spacing(2, 0),
  },
  colorBox: {
    width: '55px',
    height: '21px',
    marginRight: theme.spacing(1),
    display: 'inline-block',
  },
  label: {
    display: 'inline-block',
    marginRight: theme.spacing(1),
  },
  labelItem: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'flex-start',
    },
  },
}));
