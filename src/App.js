import React,{ useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import RowContainer from './components/RowContainer';
import Login from './components/Login';
import Profile from './components/Profile';

import { BrowserRouter as Router, Route} from 'react-router-dom';


const App = (props) => {
  const [movies, setMovies] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/videos')
    .then(r=>r.json())
    .then(data=>{
      setMovies(data)
    })
  },[])
  
  return(
    <Router>
    <div>
      <Header />
      <NavBar />
      <Route exact path="/movies" component={()=><RowContainer movies={movies}/>} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />
    </div>
  </Router>
  );
};

export default App;
