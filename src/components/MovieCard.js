import React from 'react';

//renders movie tiles
const MovieCard = (props) => {
    // renders individual movies passed down as props
    // post request to add movie to queue
    // delete request to remove movie from queue
    // handleClick, onClick, onHover - for adding and removing movie from queue
    // onClick to render MovieView page for specific movie
    return(
        <div className='movieCard'>
            <img className="picture" src={props.movie.poster_url} alt={props.movie.title}/>
            <p className='title'>{props.movie.title}</p>
        </div>
    );
};

export default MovieCard;
