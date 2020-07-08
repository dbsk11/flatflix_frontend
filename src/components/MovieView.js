import React from 'react';
import MoviePlayer from './MoviePlayer'
import MovieInfo from './MovieInfo'

//renders individual movie page
const MovieView = (props) => {
    
    const handleClick = (evt) => {
        props.setShowMovie(false)
    }

    return(
        <div>
            <div className="movieview">
                <h1 className="movieTitle">{props.movie.title}</h1>
            </div>
            <div className="moviesections">
                <MoviePlayer movie={props.movie.youtube}/>
                <MovieInfo movie={props.movie}/>
            </div>
        </div>
    );
};

export default MovieView;