import { Container, Grid, TextField } from '@mui/material';
import React from 'react';
import UseFirebase from '../../Hooks/UseFirebase';
import loginImg from '../../images/loginImg.png'

const Login = () => {
    const {signInUsingGoogle, error} = UseFirebase()
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <form>
                    <TextField
                    id="outlined-password-input"
                    label="User Name"
                    type="text"
                    name="name"
                    autoComplete="current-password"
                    style={{width: "80%"}}
                    />
                    <TextField
                    id="outlined-password-input"
                    label="Enter your email"
                    type="email"
                    name="email"
                    autoComplete="current-password"
                    style={{width: "80%", margin: "10px 0px"}}
                    />
                    <div>
                        <button type="submit">LogIn</button>
                    </div>
                    </form>
                    <div>
                        <p>Are you new Here click to <button>Register</button> </p>
                    </div>
                    <p>{error}</p>
                    <button onClick={signInUsingGoogle}>Google signIn</button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={loginImg} alt="Empty!"/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;