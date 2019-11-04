import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import {useStyles} from './style';






export default function Search(props) {
  const classes = useStyles();
  return (
        <div className={classes.search}>
            <InputBase
            onChange={e => props.MovieList(e.target.value) }

              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
  );
}
