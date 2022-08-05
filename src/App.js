import React,{ useEffect, useState } from 'react';
import Movie from './components/Movie'
import './index.css';

const featuredApi ="https://api.themoviedb.org/3/discover/movie?sorty_by=popularity.desc&api_key=523035a60f448d64fb44e36fddc972c8&page=1";
const searchApi = "https://api.themoviedb.org/3/search/movie?&api_key=523035a60f448d64fb44e36fddc972c8&query=";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(featuredApi)
      .then((res) => res.json())
      .then((data) => {
         console.log(data);
         setMovies(data.res);
    });
  }, []);

  return (
    <div>
      {(movies || []).length > 0 &&
        movies.map((movie) => <Movie key={movie.id} {...movie} />)}
    </div>
  );
}

export default App;
