import React from 'react';
import './App.css';
import Header from './headers/Header';
import NavBar from './headers/NavBar';
import RowContainer from './components/RowContainer';
import Login from './headers/Login';
import Profile from './headers/Profile';

import { BrowserRouter as Router, Route} from 'react-router-dom'

const App = (props => {

    return(
        <Router>
            <div className="heading">
                <Header />
                <NavBar />
                <Route exact path="/movies" component={()=><RowContainer/>} />
                <Route exact path="/login" component={Login}/>
                <Route exact path="/profile" component={Profile}/>
            </div>
        </Router>
    )
})

export default App;