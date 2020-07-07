import React from 'react';
import MoviePlayer from './MoviePlayer'
import MovieInfo from './MovieInfo'

//renders individual movie page
const MovieView = (props) => {
    // show details about individual movie 
    return(
        <div>
            <h1>{props.movie.title}</h1>
            <MoviePlayer movie={props.movie}/>
            <MovieInfo movie={props.movie}/>
        </div>
    );
};

export default MovieView;