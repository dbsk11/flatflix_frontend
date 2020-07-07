import React from 'react';
import MovieCard from './MovieCard'
import MovieView from './MovieView'
import "../style.css"

//renders movie tile rows
const GenreRow = (props) => {
    // conditional to show a certain number of movies and 'show more' 
    // queued movies list 
    // additional rows by genre 

    const [startPosition, setStartPosition] = useState(0)


    let arrayOfMovies = props.genre.slice(startPosition, startPosition + 6).map((moviePOJO) => {
        return <MovieCard
            movie={moviePOJO}
            key={moviePOJO.id}
        />
    })

    let seeMore = () => {
        setStartPosition(startPosition + 7) 
    }

    let seeLess = () => {
        setStartPosition(startPosition - 7)
    }

    return(
        <div className="genre">
            <button onClick={seeLess}>Go back!</button>
            {arrayOfMovies}
            <button onClick={seeMore}>See More!</button>
        </div>
    );
};

export default GenreRow;