import React, {useState} from 'react';
import MovieCard from './MovieCard';

const GenreRow = (props) => {
    //set initial state
    const [startPosition, setStartPosition] = useState(0);

    //map through array to pull out individual movies
    const arrayOfMovies = props.movies.slice(startPosition, startPosition + 7).map((moviePOJO) => {
        return <MovieCard
            movie={moviePOJO}
            key={moviePOJO.id}
            setShowMovie={props.setShowMovie}
            showMoviePage={props.showMoviePage}
        />
    });

    //shows 1 more film
    const seeMore = () => {
        let arrayLength = props.movies.length - 1
        if ((startPosition + 7) <= arrayLength){
            setStartPosition(startPosition + 1) 
        } 
        console.log(arrayLength)
        if ((startPosition + 7) > arrayLength) {
            setStartPosition(0)
        };
    };

    // const seeMore = () => {
    //     setStartPosition (startPosition + 1)
    // };

    // shows previous film
    const seeLess = () => {
        setStartPosition(startPosition-1)
    };
    
    // const seeLess = () => {
    //     setStartPosition(startPosition - 1)
    // };

    return(
        <div className="genre">
            <div className="genredisplay">
                <h4>{props.genre}</h4>
            </div> 
            <div className="moviedisplay">
                <button className="button" onClick={seeLess}>Go Back!</button>
                {arrayOfMovies}
                <button className="button" onClick={seeMore}>See More!</button>
            </div>
        </div>
    );
};

export default GenreRow;