import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    color: 'red',
}

//renders Navigation Bar
const NavBar = (props) => {
    // need to add conditional for Log In <=> Log Out
    const handleClick = (evt) => {
        console.log(evt.target)
    }
    
    return(
        <div className="navbar">
        <NavLink 
            to="/movies"
            exact
            style={link}
            onClick={handleClick}
        >Movies</NavLink>
        <NavLink
            to="/login"
            exact
            style={link}
        >Log In</NavLink>
        <NavLink 
            to="/profile"
            exact
            style={link}
        >Profile</NavLink>
    </div>
    );
};

export default NavBar;