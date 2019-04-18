import React, { Component }from 'react';
import axios from 'axios';
import Card from '../Card/Card.js';
import SearchBar from '../SearchBar/SearchBar.js';
import './Home.css';

const API = 'https://api.themoviedb.org/3/trending/all/day?api_key=88e0c08991bf9c0605abba9e68acdbcf';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=88e0c08991bf9c0605abba9e68acdbcf&query='
const API_IMAGE="https://image.tmdb.org/t/p/original/"
class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      trending: [],
      isLoading: true,
      value: '',
      searchResults: [],
      isSearching: false
    }

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  componentDidMount(){
    this.getTrendingTitles();
  }

  getTrendingTitles(){
    axios.get(API)
      .then(response => this.setState({trending: response.data, isLoading: false}))
      .then(this.showTitles());
  }

  showTitles(){
    const { trending, isLoading } = this.state;
    let result;
    let movieList = [];
    if (!isLoading){
      trending.results.map((movie, i) => {
        let image = (API_IMAGE + movie.poster_path);
        result = <Card title={movie.title} image={image} key={i}  />
        movieList.push(result);
      })
    }
    return <div className="cards"> { movieList }</div>
  }

  handleSearchChange(event){
    this.setState({value: event.target.value, isSearching: true});
    };

  handleSearchSubmit(event){
    event.preventDefault();
    this.getSearchResults();
  }

  getSearchResults(){
    const searchString = SEARCH_API + this.state.value;
    axios.get(searchString)
      .then(response => this.setState({searchResults: response.data, isSearching: false}))
      .then(this.showResults());
  }

  showResults(){
    const { isSearching, searchResults } = this.state;
    if(!isSearching){
      console.log(searchResults)
    }
  }

  render(){
    return(
      <div className = "home-div">
        <h1>MOVIE BOX </h1>
        {this.showTitles()}
        <form onSubmit={this.handleSearchSubmit}>
          <SearchBar onChange={this.handleSearchChange} iconClick={this.handleSearchSubmit}/>
        </form>
      </div>
    )
  }
}

export default Home;
