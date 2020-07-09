import React, { useState, useEffect } from 'react';
import MovieView from './MovieView';
import GenreRow from './GenreRow';
import "../style.css";

let RowContainer = (props) => {
    // sets initial state
    let [movieObj, setMovieObj] = useState({});

    // fetches movies
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/movies')
        .then(r => r.json())
        .then(data => {
            setMovies(data)
        })
    }, []);

    // defines genres
    const genres = Object.keys(movies);

    // changes state
    const showMoviePage = (movieObj) => {
        setMovieObj(movieObj)
    };

    return(
        props.showMovie
        ?
        <MovieView movie={movieObj} setShowMovie={props.setShowMovie}/>
        :
        <div className='allmovies'>
            {genres.map(genre=>
            <GenreRow genre={genre} movies={[...movies[`${genre}`]]} key={genre} setShowMovie={props.setShowMovie} showMoviePage={showMoviePage}/>
        )}</div>
    );
};

export default RowContainer;