import axios from "axios";
import React, { useState, useEffect} from "react";
import requests from "./request";

function Banner(){
    const [movie, setMovie] = useState([]);


        useEffect(() =>{
          async function fetchData(){
            const request = await axios.get(requests.fetchTopRated);
             setMovie(
             request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
        ]
    );
    return request; 
    }
    fetchData();
}, []);

return (
    <header>
        <div className="banner__contents">
            
        </div>
    </header>
);
}
export default Banner;