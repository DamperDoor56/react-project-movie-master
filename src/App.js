import React,{ useEffect, useState } from 'react';
import Row from './components/Row';
import requests from './components/request';
import './index.css';

function App() {
  const [query, setQuery] = useState('');

  
 const changeHandler = (e) =>{
  setQuery(e.target.value);
 }
  return (
      <>
      <header>
        <a href='/' className='title' >MovieDB Project</a>
        <form> 
        <input
         className='search'
         type="text"
         placeholder="Search"
         value={query} onChange={changeHandler}
         name='query'
         />
      </form>
      </header>
      <h1 className='titles this-one'>Popular</h1>
      <div className='Scrolled'> 
      <Row fetchUrl={requests.fetchTrending}/>
      </div>
      <h1 className='titles'>Terror</h1>
      <div className='Scrolled'> 
      <Row fetchUrl={requests.fetchHorrorMovies}/>
      </div>
      <h1 className='titles'>Fall in Love</h1>
      <div className='Scrolled'> 
      <Row fetchUrl={requests.fetchRomanceMovies}/>
      </div>   
    </>
  );
}

export default App;
