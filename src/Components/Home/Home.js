import React, { Component }from 'react';
import Card from '../Card/Card.js';
import SearchBar from '../SearchBar/SearchBar.js';
import './Home.css';
import axios from 'axios';


const API = 'https://api.themoviedb.org/3/trending/all/day?api_key=88e0c08991bf9c0605abba9e68acdbcf';
const API_IMAGE="https://image.tmdb.org/t/p/original/"
class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      trending: [],
      isLoading: true
    }
  }

  componentDidMount(){
    this.getTrendingTitles();
  }

  getTrendingTitles(){
    axios.get(API)
      .then(response => this.setState({trending: response.data, isLoading: false})).then(this.showTitles());
  }

  showTitles(){
    const { trending, isLoading } = this.state;
    let result;
    let movies = [];
    if (!isLoading){
      trending.results.map((movie, i) => {
        let image = (API_IMAGE + movie.poster_path);
        result = <Card title={movie.title} image={image} key={i}  />
        movies.push(result);
      })
    }
    return <div className="cards"> { movies }</div>
  }


  render(){
    return(

      <div className = "home-div">
        <h1>STEPH'S MOVIE BOX </h1>
        {this.showTitles()}
        <SearchBar/>
      </div>
    )
  }




}

export default Home;
