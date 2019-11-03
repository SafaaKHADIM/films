import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import RecipeReviewCard from './card.js'
import Grid from '@material-ui/core/Grid';
import CustomizedGridList from './gridlist';
import Details from './details.component';


const Movies = props => (
   <RecipeReviewCard  name={props.movie.show.name} image={props.movie.show.image.medium} summary={props.movie.show.summary} type={props.movie.show.type} score={props.movie.score} showDetails={props.showDetails(props.movie)}></RecipeReviewCard>
)

const Onemovie = props =>(
  <Details name ={props.movie.show.name}></Details>
)

export default class MoviesList extends Component {

  //constructor
  constructor(props) {
  super(props);
  this.showDetails = this.showDetails.bind(this);
  this.state = {movies: [] , selectedmovie : [] , detail: ''};

  }


  //componentDidMount
  componentDidMount() {
    axios.get('https://api.tvmaze.com/search/shows?q=test')
      .then(response => {
        this.setState({ movies: response.data })
      })
      .catch((error) => {
        console.log(error);
      });
  }


 //function 1 : showDetails
  showDetails = movie =>() =>{
  this.setState({
      selectedmovie: this.state.movies.filter(el => el== movie)
    });
    this.setState({
        detail: 'true'
      });
  }

  detail(){
    console.log(this.state.selectedmovie[0]);
    return <Onemovie movie={this.state.selectedmovie[0]} />
  }

  //function 2 : movielist
  movielist() {
    return this.state.movies.map(currentmovie => {
      if(currentmovie.show.image == null){
        currentmovie.show.image="test"
      }
      console.log(currentmovie);
        console.log(this.state.selectedmovie);
      return <Movies movie={currentmovie} showDetails={this.showDetails} key={currentmovie.show.id} />;
    })
  }



  //render
  render() {
    if(this.state.detail== 'true'){
      return(
      <div>
          {this.detail()}
      </div>
    )
    }
    return(
    <CustomizedGridList list=  { this.movielist() }>
    </CustomizedGridList>
      );
  }



}
