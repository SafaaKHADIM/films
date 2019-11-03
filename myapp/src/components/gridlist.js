import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Container from '@material-ui/core/Container';
import { blue } from '@material-ui/core/colors';
import { pink } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
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

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function CustomizedGridList(props) {
  const classes = useStyles();

  return (
    <Container fixed className={classes.container}>
    <div className={classes.root}>
      <GridList cellHeight={500} className={classes.gridList} cols={3} >
        {props.list.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            {tile}
          </GridListTile>
        ))}
      </GridList>
    </div>
    </Container>
  );
}
