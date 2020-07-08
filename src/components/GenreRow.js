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
        props.showMoviePage("hello")
        setStartPosition(startPosition + 6) 
    }

    //shows previous 7 films
    const seeLess = () => {
        setStartPosition(startPosition - 6)
    }
    
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