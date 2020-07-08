import React, {useState} from 'react';

//renders movie tiles
const MovieCard = (props) => {
    // post request to add movie to queue
    // delete request to remove movie from queue
    // handleClick, onClick, onHover - for adding and removing movie from queue

    const handleClick = (evt) => {
        props.showMoviePage(props.movie)
        props.setShowMovie(true)
    }

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
