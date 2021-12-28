import { Container } from '@mui/material';
import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import useAuth from '../../../Context/useAuth';
import navlogo from '../../../images/navlogo.png'
import './Header.css';


const navLogoSize = {
    width: "50px"
}


const Header = () => {
    const [showBar, setShowBar] = useState(false)
    const {user, signOutProcess} = useAuth()
    return (
        <div className="navbar-container">
            <Container>
                <div className='navbar'>
                    <div className='nav-title'>
                        <Link to="/home">
                            <div className="logo-title">
                                <img src={navlogo} alt="Empty" style={navLogoSize}/>
                                <p>CarEbiDcO</p>
                            </div>
                        </Link>
                    </div>
                    <p className='bar-button' onClick={() => setShowBar(!showBar) }><i className="fas fa-bars"></i></p>
                    {showBar ? "": <div className="nav-links">
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/Products">Products</Link></li>
                            <li><Link to="/reviews">Reviews</Link></li>
                            <li><Link to="/carQuality">CarQuality</Link></li>
                            <li>{user?.email && <Link to="/dashboard">Dashboard</Link>}</li>
                            <li><Link to="/explore"><button className='bannerBtn'>Explore</button></Link></li>
                            <li>{user?.email ? <Link to="/login"><button onClick={signOutProcess} className="logBtn">LogOut</button></Link> : <Link to="/login"><button className="logBtn">LogIn</button></Link>}</li>
                        </ul>
                        
                    </div>}
                </div>
            </Container>
        </div>
    );
};

export default Header;