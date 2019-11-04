import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import RecipeReviewCard from './card/card.js'
import Grid from '@material-ui/core/Grid';

import CustomizedGridList from './gridlist';
import Details from './details/details.component';
import Search from './search/search';



const Movies = props => (
  <div>

   <RecipeReviewCard  name={props.movie.show.name} image={props.movie.show.image.medium} summary={props.movie.show.summary} type={props.movie.show.type} score={props.movie.score} showDetails={props.showDetails(props.movie)}></RecipeReviewCard>
</div>
)

const MovieList = props => (

   <RecipeReviewCard  name={props.movie.show.name} image={props.movie.show.image.medium} summary={props.movie.show.summary} type={props.movie.show.type} score={props.movie.score} showDetails={props.showDetails(props.movie)}></RecipeReviewCard>
)

const Onemovie = props =>(

  <Details name ={props.movie.show.name} image ={props.movie.show.image.original} languange={props.movie.show.language} rating={props.movie.show.rating.average} officialSite={props.movie.show.officialSite} summary={props.movie.show.summary}></Details>
)

export default class MoviesList extends Component {

  //constructor
  constructor(props) {
  super(props);
  this.showDetails = this.showDetails.bind(this);
  this.showMovies = this.showMovies.bind(this);
  this.state = {movies: [] , selectedmovie : [] , detail: '', search:''};
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

  showMovies(id) {
    console.log('shoooooooooooooooooooooooooooooooooooooooow');
    axios.get('https://api.tvmaze.com/search/shows?q='+id)
      .then(response => {
        this.setState({ movies: response.data });
        this.setState({search:'true'});
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


search(){
  console.log('seaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaarch');

  return <Search MovieList={this.showMovies} />
}




  MovieList = id =>()=>{
    console.log("aaaaaaaaaaaaaaaaaaaaaaa");
    console.log(this);
    //this.showMovies(id);
    return this.state.movies.map(currentmovie => {
      if(currentmovie.show.image == null){
        currentmovie.show.image={medium :"https://cidco-smartcity.niua.org/wp-content/uploads/2017/08/No-image-found.jpg"}
      }
      console.log(currentmovie);
        console.log(this.state.selectedmovie);
      return <MovieList movie={currentmovie} showMovies={this.showMovies} showDetails={this.showDetails} />;
    }

  )


  }

  detail(){
    ////////////handle exceptions
    //null original image
    console.log(this.state.selectedmovie[0]);
    if(this.state.selectedmovie[0].show.image == null){
      this.state.selectedmovie[0].show.image={original :"https://cidco-smartcity.niua.org/wp-content/uploads/2017/08/No-image-found.jpg"}
    }
    //null average rating
    if(this.state.selectedmovie[0].show.rating.average == null){
      this.state.selectedmovie[0].show.rating.average="no information "
    }
    //null oficial site
    if(this.state.selectedmovie[0].show.officialSite == null){
      this.state.selectedmovie[0].show.officialSite="no information "
    }
    //null summary
    if(this.state.selectedmovie[0].show.summary == null){
      this.state.selectedmovie[0].show.summary="no information "
    }

    return <Onemovie movie={this.state.selectedmovie[0]} />
  }

  //function 2 : movielist
  movielist() {
    return this.state.movies.map(currentmovie => {
      if(currentmovie.show.image == null){
        currentmovie.show.image={medium :"https://cidco-smartcity.niua.org/wp-content/uploads/2017/08/No-image-found.jpg"}
      }
      console.log(currentmovie);
        console.log(this.state.selectedmovie);
      return <Movies movie={currentmovie} showDetails={this.showDetails} key={currentmovie.show.id} showMovies={this.showMovies}/>;
    })
  }



  //render
  render() {

    if(this.state.detail== 'true'){
      return(
      <div>
          {this.search()}
          {this.detail()}
      </div>
    )
    }

    return(
      <div>
    {this.search()}
    <CustomizedGridList list=  { this.movielist() }>
    </CustomizedGridList>
    </div>
      );
  }



}
