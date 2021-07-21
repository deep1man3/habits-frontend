import { makeStyles } from '@material-ui/core';

export const useStyles = (isDone: boolean) =>
  makeStyles((theme) => ({
    root: {
      width: '100%',
      marginBottom: theme.spacing(2),
      order: isDone ? 0 : -1,
    },
    paper: {
      padding: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
      },
      width: '100%',
      opacity: isDone ? '0.3' : '1',
    },
    icon: {
      fontSize: '128px',
      [theme.breakpoints.down('md')]: {
        fontSize: '64px',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '32px',
      },
    },
    label: {
      marginBottom: theme.spacing(2),
      width: '100%',
      '& h4': {
        [theme.breakpoints.down('md')]: {
          fontSize: '1.75rem',
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.25rem',
        },
      },
    },
    description: {
      width: '100%',
    },
    task: {
      minHeight: '150px',
    },
  }));
