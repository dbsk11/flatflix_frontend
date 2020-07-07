import React, { useState, useEffect }  from 'react';
import MovieCard from './MovieCard'
import MovieView from './MovieView'
import GenreRow from './GenreRow'

//renders movie tile rows
const RowContainer = (props) => {
    // set initial state
    const [showMovie, setShowMovie] = useState(false)
    const [movieObj, setMovieObj] = useState({})

    // fetch data
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
      fetch('http://localhost:3000/movies')
      .then(r=>r.json())
      .then(data=>{
        setMovies(data)
      })
    },[])

    const genres = Object.keys(movies)

    const showMoviePage = (movieObj) => {
        setMovieObj(movieObj)
    }

    return(
        showMovie
        ? 
        <MovieView movie={movieObj}/>
        :
        <div className='allmovies'>{genres.map(genre=>
            <GenreRow genre={genre} movies={[...movies[`${genre}`]]} key={genre.id} setShowMovie={setShowMovie} showMoviePage={showMoviePage}/>
        )}</div>
    );
};

export default RowContainer;