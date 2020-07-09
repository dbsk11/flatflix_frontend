import React from 'react';

const Header = () => {
    // defines image to be rendered
    let image = require("../images/Flatflix.png");

    return (
        <div className="header">
            <img className="image" src={image} alt="Flatflix" id="main-header"/>
        </div>  
    );
};

export default Header;