import React, { useState, useEffect }  from 'react';
import './App.css';
import Header from './headers/Header';
import NavBar from './headers/NavBar';
import RowContainer from './components/RowContainer';
import Login from './headers/Login';
import Logout from './headers/Logout';
import Profile from './headers/Profile';
import Register from './headers/Register'
import MainPage from './components/MainPage'
import { useHistory } from "react-router-dom";

import { BrowserRouter as Router, Route} from 'react-router-dom';

const App = (props => {
    const history = useHistory();
    // sets initial state
    const [showMovie, setShowMovie] = useState(false);
    const [user,setUser] = useState({
        user:{
            id:0,
            first_name:'',
            last_name:'',
            username:'',
            user_videos:'',
        },
        token:'',
    });

    //fetch user data
    useEffect(()=>{
        if(localStorage.token){
            fetch('http://localhost:3000/users/stay_logged_in',{
                headers:{
                    Authorization:`Bearer ${localStorage.token}`
                }
            })
            .then(r=>r.json())
            .then(data=>{
                console.log(data)
                if(data.message){
                    alert(data.message)
                }else{
                    localStorage.token = data.token
                    setUser(data)
                }
            })
        }
    },[]);

    // updates state
    const setShowMovie2 = (boolean) => {
        setShowMovie(boolean)
    };

    // handles response of post methods
    const handleResponse=(data)=>{
        if(data.message){
            alert(data.message)
        } else{
            localStorage.token = data.token
            setUser(data)
            history.push('/movies')
        }
    };

    // posts registration info
    const handleRegister=(userObj)=>{
        fetch('http://localhost:3000/users',{
            method:'POST',
            headers:{
                'content-type':'application/json',
                accept:'application/json'
            },
            body:JSON.stringify(userObj)
        }).then(r=>r.json()).then(handleResponse)
    };

    // posts login info
    const handleLogin= (userObj)=>{
        fetch('http://localhost:3000/users/login',{
            method:'POST',
            headers:{
                'content-type':'application/json',
                accept:'application/json',
            },
            body: JSON.stringify(userObj)
        }).then(r=>r.json()).then(handleResponse)
    };

    return(
        <div className="maincontainer">
            <div className="heading">    
                <Header />
                <NavBar setShowMovie={setShowMovie2} user={user}/>
            </div>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/movies" render={()=><RowContainer showMovie={showMovie} setShowMovie={setShowMovie2}/>} />
            {user.token ?
                <Route exact path="/logout" render={()=><Logout setUser={setUser} history={history}/>}/>
                :
                <Route exact path="/login" render={()=><Login handleLogin={handleLogin}/>}/>
            }
            <Route exact path="/register" render={()=><Register handleRegister={handleRegister}/>}/>
            <Route exact path="/profile" render={()=>{
                return user.token?<Profile user={user} /> : <Login handleLogin={handleLogin}/>
            }}/>
        </div>
    );
});

export default App;