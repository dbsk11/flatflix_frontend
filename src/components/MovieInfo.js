import React from 'react';

const MovieInfo = (props) => {
    const {director, plot, year, rating, runtime, released, imdbRating, poster_url, title} = props.movie

    return(
        <div className="movieinfo">
            <div className="moviedetails">
                <h4>Director:</h4> <p>{director}</p>
                <h4>Plot:</h4> <p>{plot}</p>
                <h4>Year:</h4> <p>{year}</p>
                <h4>Rating:</h4> <p>{rating}</p>
                <h4>Runtime:</h4> <p>{runtime}</p>
                <h4>Released:</h4> <p>{released}</p>
                <h4>IMDB Rating:</h4> <p>{imdbRating}</p>
            </div>
            <img className="viewpagepicture" src={poster_url} alt={title} />
        </div>
    );
};

export default MovieInfo;