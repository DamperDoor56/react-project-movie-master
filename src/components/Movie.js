import React from 'react';

const API_IMG= 'https://image.tmdb.org/t/p/w500';

const setVoteClass = (vote) => {
    if(vote >= 7){
        return 'green'
    } else if (vote >= 6) {
        return 'orange';
    } else {
        return 'red';
    }
}

const MovieBox = ({title, poster_path, vote_average, release_date, overview}) => (
    <div className='movie'>
        <img src={API_IMG + poster_path} alt=''></img>
        
        <div className='movie-over'>
        <div className='movie-info'>
            <h1>{title}<p>{release_date}</p></h1>
            <span className={ `tag ${setVoteClass(vote_average)}`}>
            {vote_average}</span>
        </div>
            <p>{overview}</p>
        </div>
    </div>
);
export default MovieBox;