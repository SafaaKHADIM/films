import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import RecipeReviewCard from './card.js'
import Grid from '@material-ui/core/Grid';
import CustomizedGridList from './gridlist';



const Movies = props => (
   <RecipeReviewCard name={props.movie.show.name} image={props.movie.show.image.medium} summary={props.movie.show.summary} type={props.movie.show.type} score={props.movie.score}></RecipeReviewCard>
  // <tr>
  //   <td>{props.movie.show.name}</td>
  //   <td>{props.movie.show.image.medium}</td>
  //
  // </tr>

)


export default class MoviesList extends Component {

  constructor(props) {
  super(props);
  this.state = {movies: []};

  }

  componentDidMount() {
    axios.get('https://api.tvmaze.com/search/shows?q=test')
      .then(response => {
        this.setState({ movies: response.data })
      })
      .catch((error) => {
        console.log(error);
      });

  }

  movielist() {
    return this.state.movies.map(currentmovie => {
      if(currentmovie.show.image == null){
        currentmovie.show.image="test"
      }
      console.log(currentmovie);
      return <Movies movie={currentmovie}  />;
    })
  }

  render() {
  return(

<CustomizedGridList list=  { this.movielist() }>
</CustomizedGridList>
  );

  }
}
