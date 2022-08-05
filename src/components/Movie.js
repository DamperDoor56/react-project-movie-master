import React from 'react';

const imageApi = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, poster_path, overview, vote_average}) => (
    <div className="movie">
        <img src={imageApi + poster_path} alt={title} />
    </div>
);
export default Movie;