import React, { useState }  from 'react';
import './App.css';
import Header from './headers/Header';
import NavBar from './headers/NavBar';
import RowContainer from './components/RowContainer';
import Login from './headers/Login';
import Profile from './headers/Profile';
import Register from './headers/Register'
import MainPage from './components/MainPage'
import { useHistory } from "react-router-dom";

import { BrowserRouter as Router, Route} from 'react-router-dom'

const App = (props => {
    const [showMovie, setShowMovie] = useState(false)
    const history = useHistory();
    const [user,setUser] = useState({user:{
        id:0,
        first_name:'',
        last_name:'',
        username:'',
        user_videos:'',
    }})

    const setShowMovie2 = (boolean) => {
        setShowMovie(boolean)
    }

    const handleResponse=(data)=>{
        if(data.id){
            setUser({user:data})
            history.push('/movies')
            console.log(data)
        }else{
            alert(data.message)
        }
    }
    const handleRegister=(userObj)=>{
        fetch('http://localhost:3000/users',{
            method:'POST',
            headers:{
                'content-type':'application/json',
                accept:'application/json'
            },
            body:JSON.stringify(userObj)
        }).then(r=>r.json()).then(handleResponse)
    }
    const handleLogin= (userObj)=>{
        fetch('http://localhost:3000/users/login',{
            method:'POST',
            headers:{
                'content-type':'application/json',
                accept:'application/json',
            },
            body: JSON.stringify(userObj)
        }).then(r=>r.json()).then(handleResponse)
    }

    return(
        <div className="maincontainer">
            <div className="heading">    
                <Header />
                <NavBar setShowMovie={setShowMovie2} user={user}/>
            </div>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/movies" render={()=><RowContainer showMovie={showMovie} setShowMovie={setShowMovie2}/>} />
            <Route exact path="/login" render={()=><Login handleLogin={handleLogin}/>}/>
            <Route exact path="/register" render={()=><Register handleRegister={handleRegister}/>}/>
            <Route exact path="/profile" render={()=>{
                console.log(user)
                return user.user.id?<Profile user={user} /> : <Login handleLogin={handleLogin}/>
                }}/>
        </div>
    )
})

export default App;