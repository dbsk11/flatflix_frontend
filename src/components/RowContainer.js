import React, { useState, useEffect }  from 'react';
import MovieCard from './MovieCard'
import MovieView from './MovieView'
import GenreRow from './GenreRow'

//renders movie tile rows
const RowContainer = (props) => {
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
      fetch('http://localhost:3000/movies')
      .then(r=>r.json())
      .then(data=>{
        setMovies(data)
      })
    },[])
  const genres = Object.keys(movies)
  console.log(genres)
    return(
        <div className='allmovies'>{genres.map(genre=>{
            return <GenreRow genre={genre} movies={[...movies[`${genre}`]]} key={genre.id}/>
        })}</div>
    );
};

export default RowContainer;