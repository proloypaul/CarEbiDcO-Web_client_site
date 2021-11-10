import { Container, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import UseFirebase from '../../Hooks/UseFirebase';
import loginImg from '../../images/loginImg.png'

const Login = () => {
    const {signInUsingGoogle, loginWithEmailAndPassword, error} = UseFirebase()
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
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <form onSubmit={handleLogIn}>
                    <TextField
                    id="outlined-password-input"
                    label="Enter Your Password"
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
    );
};

export default Login;