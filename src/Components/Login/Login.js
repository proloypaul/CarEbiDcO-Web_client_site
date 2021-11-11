import { Container, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Context/useAuth';
import loginImg from '../../images/loginImg.png'
import Header from '../Home/Header/Header';

const Login = () => {
    const {signInUsingGoogle, loginWithEmailAndPassword, error} = useAuth()
    const [logerData, setLogerData] = useState({})
    const history = useHistory()
    const location = useLocation()

    const handleBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const allLogerData = {...logerData}
        allLogerData[field] = value;
        setLogerData(allLogerData)
    }
    const handleLogIn = event => {
        event.preventDefault()
        // console.log(logerData)
        loginWithEmailAndPassword(logerData.email, logerData.password, history, location)

    }
    return (
        <div>
            <Header></Header>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <form onSubmit={handleLogIn}>
                        <TextField
                        id="outlined-password-input"
                        label="Enter Your Email"
                        type="email"
                        name="email"
                        onBlur={handleBlur}
                        autoComplete="current-password"
                        style={{width: "80%"}}
                        />
                        <TextField
                        id="outlined-password-input"
                        label="Enter Your Password"
                        type="password"
                        name="password"
                        onBlur={handleBlur}
                        autoComplete="current-password"
                        style={{width: "80%", margin: "10px 0px"}}
                        />
                        <div>
                            <button type="submit">LogIn</button>
                        </div>
                        </form>
                        <div>
                            <p>Are you new Here click to <Link to="/register"><button>Register</button></Link> </p>
                        </div>
                        <p>{error}</p>
                        <button onClick={() => signInUsingGoogle(history, location)}>Google signIn</button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={loginImg} alt="Empty!"/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Login;