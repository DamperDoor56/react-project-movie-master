import React from 'react';

const API_IMG= 'https://image.tmdb.org/t/p/w500';

const MovieBox = ({title, poster_path, vote_average, release_date, overview}) => (
    <div className='movie'>
        <img src={API_IMG + poster_path} alt=''></img>
        <div className='movie-info'>
            <h1>{title}</h1>
            <span>{vote_average}</span>
        </div>
        <div className='movie-over'>
            <h2>Summary:</h2>
            <p>{overview}</p>
        </div>
    </div>
);
export default MovieBox;