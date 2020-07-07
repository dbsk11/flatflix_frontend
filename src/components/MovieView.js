import React from 'react';
import MoviePlayer from './MoviePlayer'
import MovieInfo from './MovieInfo'

//renders individual movie page
const MovieView = (props) => {
    
    const handleClick = (evt) => {
        props.setShowMovie(false)
    }
    
    return(
        <div className="movieView">
            <button onClick={handleClick}>Return To Movie List</button>
            <h1 className="movieTitle">{props.movie.title}</h1>
            <div className="movieSections">
                <MoviePlayer movie={props.movie}/>
                <MovieInfo movie={props.movie}/>
            </div>
        </div>
    );
};

export default MovieView;