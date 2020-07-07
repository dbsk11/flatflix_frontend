import React from 'react';
import MovieCard from './MovieCard'
import MovieView from './MovieView'
import Row from './Row'

//renders movie tile rows
const RowContainer = (props) => {
    return(
        <div className='row'>{props.movies.map(movie=>{
            return <Row movie={movie} key={movie.id}/>
        })}</div>
    );
};

export default RowContainer;