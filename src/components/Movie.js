import React from 'react';

const API_IMG= 'https://image.tmdb.org/t/p/w500';

const MovieBox = ({title, poster_path, vote_average, release_date, overview}) => (
    <div>
        <h1>{title}</h1>
        <img src={API_IMG + poster_path} alt=''></img>
        <p>{overview}</p>
    </div>
);
export default MovieBox;