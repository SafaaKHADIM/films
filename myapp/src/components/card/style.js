import { makeStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';

export const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 290,
    backgroundColor: pink[100],
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

  title: {
    textColor: pink[500],
  },

}));
