import React from 'react';

//renders movie info
const MovieInfo = (props) => {
    //displays information for selected movie 
    const {director, plot, year, rating, runtime, released, imdbRating, poster_url, title} = props.movie
    return(
        <div className="movieInfo">
            <img className="viewpagepicture" src={poster_url} alt={title} />
            Director: {director}
            Plot: {plot}
            Year: {year}
            Rating: {rating}
            Runtime: {runtime}
            Released: {released}
            IMDB Rating: {imdbRating}
        </div>
    );
};

export default MovieInfo;