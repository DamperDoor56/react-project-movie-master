import React,{ useEffect, useState } from 'react';
import MovieBox from './components/Movie';
import './index.css';

const API_URL= 'https://api.themoviedb.org/3/movie/popular?api_key=523035a60f448d64fb44e36fddc972c8';
// const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=523035a60f448d64fb44e36fddc972c8&query';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then((res) => res.json())
    .then(data => {
      console.log(data);
      setMovies(data.results);
    })
  }, [])

  return (
    <div>
      <h1>Movies</h1>
      {movies.map((movieReq) =><MovieBox key={movieReq.id} {...movieReq}/>)}
    </div>
  );
}

export default App;
