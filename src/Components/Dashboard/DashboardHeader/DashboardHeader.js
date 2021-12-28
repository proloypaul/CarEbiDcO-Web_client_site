import { Container } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Context/useAuth';
import navlogoTwo from '../../../images/navlogo.png';
const navLogoSize = {
    width: "50px"
}

const DashboardHeader = () => {
    const [showBar, setShowBar] = useState(false)
    const {user, admin, signOutProcess} = useAuth()
    return (
        <div className="navbar-container">
            <Container>
                <div className='navbar'>
                    <div className='nav-title'>
                        <Link to="/home">
                            <div className="logo-title">
                                <img src={navlogoTwo} alt="Empty" style={navLogoSize}/>
                                <p>CarEbiDcO</p>
                            </div>
                        </Link>
                    </div>
                    <p className='bar-button' onClick={() => setShowBar(!showBar) }><i className="fas fa-bars"></i></p>
                    { showBar ? "" : <div className="nav-links">
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            { admin ? <span>
                                <ul>
                                    <li><Link to="/makeAdmin">Make Admin</Link></li>
                                    <li><Link to="/manageOrder">ManageOrder</Link></li>
                                    <li><Link to="/addProduct">AddProduct</Link></li>
                                    <li><Link to="manageProduct">ManageProduct</Link></li>
                                </ul>
                            </span>:<span>
                                <ul>
                                    <li><Link to="/myOrder">MyOrder</Link></li>
                                    <li><Link to="/review">Review</Link></li>
                                    <li><Link to="/pay">Pay</Link></li>
                                </ul>
                                </span>
                            }
                            <li>{user?.email ? <Link to="/login"><button onClick={signOutProcess} className="logBtn">LogOut</button></Link>: <Link to="/login"><button className="logBtn">LogIn</button></Link>}</li>
                        </ul>
                        
                    </div>}
                </div>
            </Container>

        </div>
    );
};

export default DashboardHeader;