import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    color: 'aquamarine',
}

//renders Navigation Bar
const NavBar = (props) => {
    // need to add conditional for Log In <=> Log Out
    const handleClick = (evt) => {
        props.setShowMovie(false)
    }
    
    return(
        <div className="navbar">
        <NavLink 
            to="/movies"
            exact
            style={link}
            activeStyle={{ color: 'red' }}
            onClick={handleClick}
        >Movies</NavLink>
        <NavLink
            to="/login"
            exact
            style={link}
            activeStyle={{ color: 'red' }}
        >Log In</NavLink>
        <NavLink 
            to="/profile"
            exact
            style={link}
            activeStyle={{ color: 'red' }}
        >Profile</NavLink>
    </div>
    );
};

export default NavBar;