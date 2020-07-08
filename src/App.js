import React, { useState }  from 'react';
import './App.css';
import Header from './headers/Header';
import NavBar from './headers/NavBar';
import RowContainer from './components/RowContainer';
import Login from './headers/Login';
import Profile from './headers/Profile';

import { BrowserRouter as Router, Route} from 'react-router-dom'

const App = (props => {
    const [showMovie, setShowMovie] = useState(false)

    const setShowMovie2 = (boolean) => {
        setShowMovie(boolean)
    }

    return(
        <div className="maincontainer">
            <div className="heading">    
                <Header />
                <NavBar setShowMovie={setShowMovie2} />
            </div>
            <Route exact path="/movies" render={()=><RowContainer showMovie={showMovie} setShowMovie={setShowMovie2}/>} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/profile" component={Profile}/>
        </div>
    )
})

export default App;