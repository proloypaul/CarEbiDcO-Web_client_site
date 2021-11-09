import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="navBar">
                <div className="navLogo">

                </div>
                <div className="navSection">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/Products">Products</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;