import React from 'react';
import MovieCard from './MovieCard'
import MovieView from './MovieView'
import GenreRow from './GenreRow'

//renders movie tile rows
const RowContainer = (props) => {
    return(
        <div className='allmovies'>{props.genres.map(genre=>{
            return <GenreRow genre={genre} key={genre.id}/>
        })}</div>
    );
};

export default RowContainer;