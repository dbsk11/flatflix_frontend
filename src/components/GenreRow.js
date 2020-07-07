import React, {useState} from 'react';
import MovieCard from './MovieCard'
import MovieView from './MovieView'

//renders movie tile rows
const GenreRow = (props) => {
    // need to add users queue

    //set initial state
    const [startPosition, setStartPosition] = useState(0)

    //map through array to pull out individual movies
    const arrayOfMovies = props.movies.slice(startPosition, startPosition + 6).map((moviePOJO) => {
        return <MovieCard
            movie={moviePOJO}
            key={moviePOJO.id}
            setShowMovie={props.setShowMovie}
            showMoviePage={props.showMoviePage}
        />
    })

    //shows 7 more films
    const seeMore = () => {
        setStartPosition(startPosition + 7) 
    }

    //shows previous 7 films
    const seeLess = () => {
        setStartPosition(startPosition - 7)
    }

    return(
        <div className="genre">
            <h4>{props.genre}</h4>
            <button onClick={seeLess}>Go back!</button>
            {arrayOfMovies}
            <button onClick={seeMore}>See More!</button>
        </div>
    );
};

export default GenreRow;