import React, {useState} from 'react';

const MovieCard = (props) => {
    // triggered if a movie has been clicked
    const handleClick = (evt) => {
        props.showMoviePage(props.movie)
        props.setShowMovie(true)
    };

    return(
        <div className='movieCard' onClick={handleClick}>
            <img className="picture" src={props.movie.poster_url} alt={props.movie.title}/>
            <div className='overlay'>
                <p className='title'>{props.movie.title}</p>
            </div>
        </div>
    );
};

export default MovieCard;
