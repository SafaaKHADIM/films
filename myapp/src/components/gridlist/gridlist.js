import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Container from '@material-ui/core/Container';
import {useStyles} from './style';



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
