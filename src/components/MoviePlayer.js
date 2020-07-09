import React from 'react';

const MoviePlayer = (props) => {
    //sets up video to be played
    const original = JSON.parse(props.movie).video.url
    const url = original.replace('watch?v=','embed/')

    return(
        <iframe title={props.movie.id} className="player" src={url+'?autoplay=1'}>
        </iframe>
    );
};

export default MoviePlayer;