import { Container, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../Context/useAuth';
import Header from '../../Home/Header/Header';
import './Registation.css';

const Registation = () => {
    const {registerWithEmailAndPassword, error} = useAuth()
    const [registerData, setRegisterData] = useState({})
    const history = useHistory()

    const handleBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const allData = {...registerData}
        allData[field] = value;
        setRegisterData(allData)
    }
    const handleRegister = event => {
        event.preventDefault()
        // console.log(registerData)
        if(registerData.password === registerData.retypePassword){
            registerWithEmailAndPassword(registerData.email, registerData.password, registerData.name, history)
            alert("Register successFully!")
            event.target.reset()
        }else{
            alert("Password and retype password don't match try again")
        }
    }
    return (
        <div>
            <Header></Header>
            <Container>
                <h1>Registation section</h1>
                <div className="form-container">
                    <form onSubmit={handleRegister}>
                        <TextField
                        id="standard-password-input"
                        label="Name"
                        type="text"
                        name="name"
                        onBlur={handleBlur}
                        sx={{width:"50%"}}
                        autoComplete="current-password"
                        variant="standard"
                        />
                        <TextField
                        id="standard-password-input"
                        label="abc@gmail.com"
                        type="email"
                        name="email"
                        onBlur={handleBlur}
                        sx={{width:"50%", my:5}}
                        autoComplete="current-password"
                        variant="standard"
                        />
                        <TextField
                        id="standard-password-input"
                        label="create a password"
                        type="password"
                        name="password"
                        onBlur={handleBlur}
                        sx={{width:"50%"}}
                        autoComplete="current-password"
                        variant="standard"
                        />
                        <TextField
                        id="standard-password-input"
                        label="Retype password" 
                        type="password"
                        name="retypePassword"
                        onBlur={handleBlur}
                        sx={{width:"50%", my:5}}
                        autoComplete="current-password"
                        variant="standard"
                        />
                        <div style={{textAlign: "center"}}>
                            <p>{error}</p>
                            <button className="submitBtn" type="submit">Confirm</button>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default Registation;