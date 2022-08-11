import React, { useState, useEffect} from "react";
import axios from './axios';
import './Row.css';



const base_url= 'https://image.tmdb.org/t/p/w500';

function Row({title, fetchUrl, poster_path, vote_average, release_date, overview}){
    const [movies, setMovies] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() =>{
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
  

    return(
        <div className="row" onClick={() => setShow(true)}>
            <h2>{title}</h2>

            <div className="row__posters" >
                {movies.map(movie => (
                    <img
                    className="row__poster" 
                    src={base_url + movie.poster_path} 
                    alt={movie.name}></img>
                ))}
            </div>
            { 
                show?<div className="Tuttt">{movies.map(movie => (
                    <h1>{movie.name}</h1>))}
                    </div>
            :null
            }
            
        </div>
    );
}

export default Row;