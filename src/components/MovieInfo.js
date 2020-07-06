import React from 'react';

//renders movie info
const MovieInfo = () => {
    //displays information for selected movie 
    return(
        <div>
            <h1>Title: </h1>
            <h3>Director: </h3>
            <h3>Plot: </h3>
            <h4>Year: </h4>
            <h4>Rating: </h4>
            <h4>Runtime: </h4>
            <h4>Released: </h4>
            <h4>IMDB Rating: </h4>
        </div>
    );
};

export default MovieInfo;