import React from 'react';
import MovieCard from './MovieCard'
import MovieView from './MovieView'

//renders movie tile rows
const Row = (props) => {
    // conditional to show a certain number of movies and 'show more' 
    // queued movies list 
    // additional rows by genre 
    return(
    <div>{props.movie.title}</div>
    );
};

export default Row;