import React,{ useEffect, useState } from 'react';
import MovieBox from './components/Movie';
import './index.css';

const API_URL= 'https://api.themoviedb.org/3/movie/popular?api_key=523035a60f448d64fb44e36fddc972c8';

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch(API_URL)
    .then((res) => res.json())
    .then(data => {
      setMovies(data.results);
    })
  }, [])

  
 const searchMovie = async(e) =>{
    e.preventDefault();
    try{
      const url= `https://api.themoviedb.org/3/search/movie?api_key=523035a60f448d64fb44e36fddc972c8&query=${query}`;
      const res = await fetch(url); 
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    }
    catch(e){
      console.log(e)
    }
 }

 const changeHandler = (e) =>{
  setQuery(e.target.value);
 }
  return (
      <>
      <header>
        <a href='/' className='title' >MovieDB Project</a>
        <form onSubmit={searchMovie}> 
        <input
         className='search'
         type="text"
         placeholder="Search"
         value={query} onChange={changeHandler}
         name='query'
         />
      </form>
      </header>
      <h1 className='titles'>Popular</h1>
      <div className='Scrolled'> 
      {movies.map((movieReq) => <MovieBox key={movieReq.id} {...movieReq}/>)}
      </div>
      <div className='movie-container'>
      {movies.map((movieReq) => <MovieBox key={movieReq.id} {...movieReq}/>)}
      </div>
   
    </>
  );
}

export default App;
