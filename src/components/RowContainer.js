import React, { useState, useEffect } from 'react';
import MovieView from './MovieView'
import GenreRow from './GenreRow'
import "../style.css"

let RowContainer = (props) => {
    let [movieObj, setMovieObj] = useState({});

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/movies')
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setMovies(data)
        })
    }, []);

    const genres = Object.keys(movies);

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

export default RowContainer