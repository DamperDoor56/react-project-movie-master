import React,{ useEffect, useState } from 'react';
import Movie from './components/Movie'
import './index.css';

const featuredApi ="https://api.themoviedb.org/3/movie/550?api_key=523035a60f448d64fb44e36fddc972c8";
const imageApi = "https://image.tmdb.org/t/p/w1280";
const searchApi = "https://api.themoviedb.org/3/search/movie?&api_key=523035a60f448d64fb44e36fddc972c8&query=";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(featuredApi).then(res => res.json())
    .then((data) => {
      console.log(data);
      setMovies(data.results);

    });
    
  }, []);

  return (
    <div>
      {movies.length > 0 && movies.map((movie) =><Movie />)}
    </div>
  );
}

export default App;
