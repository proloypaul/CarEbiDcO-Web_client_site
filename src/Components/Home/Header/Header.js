import { Container } from '@mui/material';
import React from 'react';
import { Link} from 'react-router-dom';
import useAuth from '../../../Context/useAuth';
import navlogo from '../../../images/navlogo.png';
import './Header.css';

const navLogoSize = {
    width: "50px"
}

const Header = () => {
    const {user, signOutProcess} = useAuth()
    return (
        <div className="navbar-container">
            <Container>
                <nav className="navBar">
                    <div className="navLogo">
                        <Link to="/home">
                            <div className="logo-title">
                                <img src={navlogo} alt="Empty" style={navLogoSize}/>
                                <p>CarEbiDcO</p>
                            </div>
                        </Link>
                    </div>
                    <div className="navSection">
                        <Link to="/home">Home</Link>
                        <Link to="/Products">Products</Link>
                        <Link to="/reviews">Reviews</Link>
                        <Link to="carQuality">CarQuality</Link>
                        {user?.email && <Link to="/dashboard">Dashboard</Link>}
                        <Link to="/explore"><button className="bannerBtn">Explore</button></Link>
                        {user?.email ? <button onClick={signOutProcess} className="logBtn">LogOut</button> : <Link to="/login"><button className="logBtn">LogIn</button></Link>}
                    </div>
                </nav>
            </Container>
        </div>
    );
};

export default Header;