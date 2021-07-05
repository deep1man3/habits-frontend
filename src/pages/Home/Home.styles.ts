import { makeStyles } from '@material-ui/core';
import background from '../../assets/background.jpg';

export const useStyles = makeStyles(() => ({
  hero: {
    background: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    backgroundSize: 'cover',
  },
}));
