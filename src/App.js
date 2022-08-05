import React,{ useEffect, useState } from 'react';
import MovieBox from './components/Movie';
import Movie from './components/Movie'
import './index.css';

const API_IMG= 'https://image.tmdb.org/t/p/w500';
const API_URL= 'https://api.themoviedb.org/3/movie/popular?api_key=523035a60f448d64fb44e36fddc972c8';
const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=523035a60f448d64fb44e36fddc972c8&query';

function App() {
  const [movies, setMovies] = useState([]);
  const example = ["1", "2"];

  return (
    <div>
      <h1>Movies</h1>
      {example.map((movieReq) => <MovieBox />)}
    </div>
  );
}

export default App;
