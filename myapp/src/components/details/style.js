import { makeStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';


export const useStyles = makeStyles(theme => ({

  container:{
    backgroundColor: pink[100]
  },
  card: {
    maxWidth: 600,
  },
  media: {
    height: 600,
  },
  // paper:{
  //   padding: theme.spacing(2),
  //  textAlign: 'center',
  //  color: theme.palette.text.secondary,
  // },
  paper: {
    padding: theme.spacing(3, 2),
    width: 600,
    margin: 10
  }
}));
