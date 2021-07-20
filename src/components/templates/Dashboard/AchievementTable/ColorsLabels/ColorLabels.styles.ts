import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: theme.spacing(2, 4),
    },
    maxWidth: '1024px',
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
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
      marginBottom: theme.spacing(1),
    },
    justifyContent: 'center',
  },
}));
