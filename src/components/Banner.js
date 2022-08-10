import axios from "./axios.js";
import React, { useState, useEffect} from "react";
import requests from "./request";
import './Banner.css'


function Banner(){
    const [movie, setMovies] = useState([]);

    useEffect (() =>{
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(
                request.data.results[
                    Math.floor(Math.random() * (request.data.results.length - 1))
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;  
    }

    return(
        <header className="banner"
            
            style={{
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `linear-gradient(90deg, rgba(35,36,38,0.8) 22%, rgba(19,20,20,0.2) 58%),
                url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center top ",
            }}
            >
                <div className="banner__contents">
                    <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}
                    </h1>
                
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">Add to My List</button>
                </div>
                <h3 className="banner__description">
                    {truncate(movie?.overview, 200)}
                    </h3>
                </div>



               <div className="banner--fadeBottom" />
        </header>
    )
}
export default Banner;