import React, {useEffect, useState} from 'react';
import MovieList from './components/Movielist';
// import 'bootstrap/dist/css/boostrap.min.css';
import './App.css';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/searchBox';

const App = () =>{
  const [movies, setMovies] = useState([]);

  const [searchValue, setSearchValue] = useState('');
  const getMovieRequest = async() =>{
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=58fc0883`;
    console.log(url);

    const response = await fetch(url);
    console.log(response);
    const responseJson = await response.json();
    console.log(responseJson);
    if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
  };

  useEffect(() =>{
    console.log(searchValue);
  }, [searchValue])
  return <div> 
    <div class = "row">
    <MovieListHeading heading = 'Movies'/>
    <SearchBox searchValue = {searchValue} setSearchValue = {setSearchValue} getMovieRequest = {getMovieRequest}/>
    </div>
    <div class = "row">
      <MovieList movies = {movies}/>      
    </div>
  </div> 
}

export default App;

