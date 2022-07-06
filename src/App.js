import { useEffect, useState } from "react";
import './App.css';
import './App.scss';
import SideBar from "./components/SideBar";
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";
//1e1eeb4
const API_URL = 'http://www.omdbapi.com?apikey=1e1eeb4';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async(title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search)
    }
    useEffect(() => {
        searchMovies('Superman');
    }, []);

    return (
        <div className="app">
             <SideBar />
            <h1>Curiosity's Diary</h1>
        
        <div className="search">
            <input placeholder="Search for movies" 
            value= {searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}>
            </input>
            <img src={SearchIcon} alt='search' 
            onClick={() => searchMovies(searchTerm)}/>
        </div>

        {movies?.length > 0
          ? (
            <div className="container">
            {movies.map((movie) => (
                <MovieCard movie={movie} />
                ))}
            </div>
            ) : (
            <div className="empty">
             <h2>No movies found</h2>
            </div>
            )}

      

        </div>
    );
}

export default App;