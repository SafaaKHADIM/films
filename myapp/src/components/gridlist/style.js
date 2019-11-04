import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import { pink } from '@material-ui/core/colors';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
    height: 450,
    right: 150,
    padding:80,
    backgroundColor:blue[50]
  },
  container:{
    backgroundColor: pink[100]
  }
}));
