import React from 'react';
import MoviePlayer from './MoviePlayer'
import MovieInfo from './MovieInfo'

//renders individual movie page
const MovieView = (props) => {
    // show details about individual movie 
    return(
        <div>
            <h1>Movie Title</h1>
            MoviePlayer
            MovieInfo
        </div>
    );
};

export default MovieView;