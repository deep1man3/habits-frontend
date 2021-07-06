import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  link: {
    '&.active': {
      textDecoration: 'underline',
    },
  },
}));
