import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Row from './components/Row';
import Login from './components/Login';
import Profile from './components/Profile';

import { BrowserRouter as Router, Route} from 'react-router-dom';


const App = (props) => {
  return(
    <Router>
    <div>
      <Header />
      <NavBar />
      <Route exact path="/movies" component={Row} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />
    </div>
  </Router>
  );
};

export default App;
