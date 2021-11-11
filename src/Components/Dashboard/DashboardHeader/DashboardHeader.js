import { Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Context/useAuth';

const DashboardHeader = () => {
    const {user, admin, signOutProcess} = useAuth()
    return (
        <div className="navbar-container">
            <Container>
                <nav className="navBar">
                    <div className="navLogo">

                    </div>
                    <div className="navSection">
                        <Link to="/home">Home</Link>
                        {admin ? <span>
                            <Link to="/makeAdmin">Make Admin</Link>
                            <Link to="/manageOrder">ManageOrder</Link>
                            <Link to="/addProduct">AddProduct</Link>
                            </span>: <span>
                                <Link to="/myOrder">MyOrder</Link>
                                <Link to="/review">Review</Link>
                                <Link to="/pay">Pay</Link>
                                </span>}
                        
                        {user?.email ? <Link to="/login"><button onClick={signOutProcess} className="logBtn">LogOut</button></Link>: <Link to="/login"><button className="logBtn">LogIn</button></Link>}
                    </div>
                </nav>
            </Container>
        </div>
    );
};

export default DashboardHeader;