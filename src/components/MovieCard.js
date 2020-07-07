import React, {useState} from 'react';

//renders movie tiles
const MovieCard = (props) => {
    // post request to add movie to queue
    // delete request to remove movie from queue
    // handleClick, onClick, onHover - for adding and removing movie from queue

    const handleClick = (evt) => {
        props.setShowMovie(true)
        props.showMoviePage(props.movie)
    }

    return(
        <div className='movieCard' onClick={handleClick}>
            <img 
                className="picture" 
                src={props.movie.poster_url} 
                alt={props.movie.title}
                />
            <p className='title'>{props.movie.title}</p>
        </div>
    );
};

export default MovieCard;
