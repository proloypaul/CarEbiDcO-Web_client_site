import { Container } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Container>
            <nav className="navBar">
                <div className="navLogo">

                </div>
                <div className="navSection">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/Products">Products</NavLink>
                    <NavLink to="/reviews">Reviews</NavLink>
                </div>
            </nav>
        </Container>
    );
};

export default Header;