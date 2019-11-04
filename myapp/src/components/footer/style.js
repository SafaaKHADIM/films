import { makeStyles } from '@material-ui/core/styles';
import Image from '../../footer.png';

export const useStyles = makeStyles(theme => ({

  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundImage: `url(${Image})`
  },
  grow: {
    flexGrow: 1,
  },


}));
