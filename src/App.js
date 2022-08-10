import React from 'react';
import Row from './components/Row';
import requests from './components/request';
import './index.css';
import Banner from './components/Banner';
import NavBar from './components/Navbar'

function App() {

 
  return (
      <>
      <NavBar />
      <Banner />
      <h1 className='titles this-one'>Popular</h1>
      <Row fetchUrl={requests.fetchTrending}/>
      <h1 className='titles'>Terror</h1>
      <Row fetchUrl={requests.fetchHorrorMovies}/>
      <h1 className='titles'>Top rated</h1>
      <Row fetchUrl={requests.fetchTopRated}/>
      <h1 className='titles'>Romance</h1>
      <Row fetchUrl={requests.fetchRomanceMovies}/>
      <h1 className='titles'>Documentaries</h1>
      <Row fetchUrl={requests.fetchDocumentaries}/>
      <h1 className='titles'>Comedy</h1>
      <Row fetchUrl={requests.fetchComedyMovies}/>
      <h1 className='titles'>Action</h1>
      <Row fetchUrl={requests.fetchActionMovies}/>
    </>
  );
}

export default App;
