import React from 'react';
import { NavLink } from 'react-router-dom';

//renders Navigation Bar
const NavBar = (props) => {
    // need to add conditional for Log In <=> Log Out
    return(
        <div>
        <NavLink 
            to="/movies"
            exact
        >Movies</NavLink>
        <NavLink
            to="/login"
            exact
        >Log In</NavLink>
        <NavLink 
            to="/profile"
            exact
        >Profile</NavLink>
    </div>
    );
};

export default NavBar;