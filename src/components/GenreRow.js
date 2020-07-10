import React, {useState} from 'react';
import MovieCard from './MovieCard';

const GenreRow = (props) => {
    //set initial state
    const [startPosition, setStartPosition] = useState(0);

    //map through array to pull out individual movies

    const getMoviesIndex=(startPosition,movies)=>{
        if(startPosition+7<=movies.length){
            return movies.slice(startPosition, startPosition + 7)
        }else{
            const leftOver = movies.length-startPosition
            const array = movies.slice(startPosition,leftOver)
            setStartPosition(0)
            const loopMoviesCount = 7-leftOver
            array.push(movies.slice(startPosition, startPosition + loopMoviesCount))
            return array
        }

    }
    const arrayOfMovies =(props)=>{
        const moviesArray = getMoviesIndex(startPosition,props.movies)
        console.log(moviesArray)
        return moviesArray.map((moviePOJO) => <MovieCard
                movie={moviePOJO}
                key={moviePOJO.id}
                setShowMovie={props.setShowMovie}
                showMoviePage={props.showMoviePage}
            />
        );
    } 

    //shows 7 more films
    const seeMore = () => {
        props.showMoviePage("hello")
        setStartPosition(startPosition + 7) 
    };

    //shows previous 7 films
    const seeLess = () => {
        setStartPosition(startPosition - 7)
    };
    
    return(
        <div className="genre">
            <div className="genredisplay">
                <h4>{props.genre}</h4>
            </div> 
            <div className="moviedisplay">
                <button className="button" onClick={seeLess}>Go Back!</button>
                {arrayOfMovies(props)}
                <button className="button" onClick={seeMore}>See More!</button>
            </div>
        </div>
    );
};

export default GenreRow;