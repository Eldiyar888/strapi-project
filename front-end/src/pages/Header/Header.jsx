import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='header'>
            <div className='header-wrapper'>
                <Link to="/">home</Link>
                <Link to="/product">product</Link>
                <Link to="/about">about us</Link>
            </div>
        </div>
    );
};

export default Header;