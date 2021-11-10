import { Container } from '@mui/material';
import React from 'react';
import { Link} from 'react-router-dom';
import UseFirebase from '../../../Hooks/UseFirebase';
import './Header.css';

const Header = () => {
    const {user, signOutProcess} = UseFirebase()
    return (
        <Container>
            <nav className="navBar">
                <div className="navLogo">

                </div>
                <div className="navSection">
                    <Link to="/home">Home</Link>
                    <Link to="/Products">Products</Link>
                    <Link to="/reviews">Reviews</Link>
                    {user?.email ? <button onClick={signOutProcess}>LogOut</button> : <Link to="/login"><button>LogIn</button></Link>}
                </div>
            </nav>
        </Container>
    );
};

export default Header;