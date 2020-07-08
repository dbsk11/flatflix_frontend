import React, { useState }  from 'react';
import './App.css';
import Header from './headers/Header';
import NavBar from './headers/NavBar';
import RowContainer from './components/RowContainer';
import Login from './headers/Login';
import Profile from './headers/Profile';
import Register from './headers/Register'
import MainPage from './components/MainPage'

import { BrowserRouter as Router, Route} from 'react-router-dom'

const App = (props => {
    const [showMovie, setShowMovie] = useState(false)
    const [user,setUser] = useState({user:{
        id:null,
        first_name:'',
        last_name:'',
        username:'',
        user_videos:'',
    }})

    const setShowMovie2 = (boolean) => {
        setShowMovie(boolean)
    }

    const handleRegister=(userObj)=>{
        fetch('http://localhost:3000/users',{
            method:'POST',
            headers:{
                'content-type':'application/json',
                accept:'application/json'
            },
            body:JSON.stringify(userObj)
        }).then(r=>r.json()).then(data=>{
            if(data.id){
                setUser({user:data})
            }else{
                alert(data.message)
            }
            console.log(data)
        })
    }
    const handleLogin= ()=>{

    }

    return(
        <div className="maincontainer">
            <div className="heading">    
                <Header />
                <NavBar setShowMovie={setShowMovie2} />
            </div>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/movies" render={()=><RowContainer showMovie={showMovie} setShowMovie={setShowMovie2}/>} />
            <Route exact path="/login" render={()=><Login handleSubmit={handleLogin}/>}/>
            <Route exact path="/register" render={()=><Register handleSubmit={handleRegister}/>}/>
            <Route exact path="/profile" render={user.id?()=><Profile user={user} />: <Login handleSubmit={handleLogin}/>}/>
        </div>
    )
})

export default App;