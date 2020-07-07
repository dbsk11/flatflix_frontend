import React from 'react';

//renders movie info
const MovieInfo = (props) => {
    //displays information for selected movie 
    const {director, plot, year, rating, runtime, released, imdbRating, poster_url, title} = props.movie
    return(
        <div className="movieInfo">
            <img className="viewpagepicture" src={poster_url} alt={title} />
            <h3>Director: {director}</h3>
            <h3>Plot: {plot}</h3>
            <h4>Year: {year}</h4>
            <h4>Rating: {rating}</h4>
            <h4>Runtime: {runtime}</h4>
            <h4>Released: {released}</h4>
            <h4>IMDB Rating: {imdbRating}</h4>
        </div>
    );
};

export default MovieInfo;