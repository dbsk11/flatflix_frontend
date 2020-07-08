// import React, { useState, useEffect }  from 'react';
// import MovieView from './MovieView'
// import GenreRow from './GenreRow'
// import "../style.css"

// //renders movie tile rows
// const RowContainer = (props) => {
//     // set initial state
    
//     // fetch data
//     const [movies, setMovies] = useState([]);
//     useEffect(()=>{
//       fetch('http://localhost:3000/movies')
//       .then(r=>r.json())
//       .then(data=>{
//         setMovies(data)
//       })
//     },[])
    
//     const genres = Object.keys(movies)
//     const [movieObj, setHello] = useState(true)

//     function setMovieObj2(movie){
//       console.log(movie)
//       setHello("hi")
//     }
    
//     useEffect(() => {console.log("hello")}, [movieObj])

//     console.log(movieObj)

//     return(
//         props.showMovie
//         ? 
//         <MovieView movie={movieObj} setShowMovie={props.setShowMovie}/>
//         :
//         <div className='allmovies'>
//           <button onClick={setMovieObj2}>Button</button>
//           {genres.map(genre=>
//             <GenreRow genre={genre} movies={[...movies[`${genre}`]]} key={genre} setShowMovie={props.setShowMovie} setMovieObj={setMovieObj2}/>
//         )}</div>
//     );
// };

// export default RowContainer;

import React, { useState, useEffect } from 'react';
import MovieView from './MovieView'
import GenreRow from './GenreRow'
import "../style.css"

let RowContainer = (props) => {
    let [movieObj, setMovieObj] = useState({});

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/movies')
        .then(r => r.json())
        .then(data => {
            setMovies(data)
        })
    }, []);

    const genres = Object.keys(movies);

    const showMoviePage = (movieObj) => {
        setMovieObj(movieObj)
    };

    console.log(movieObj)
    return(
        props.showMovie
        ?
        <MovieView movie={movieObj} setShowMovie={props.setShowMovie}/>
        :
        <div className='allmovies'>{genres.map(genre=>
            <GenreRow genre={genre} movies={[...movies[`${genre}`]]} key={genre.id} setShowMovie={props.setShowMovie} showMoviePage={showMoviePage}/>
        )}</div>
    );
};

export default RowContainer