import { Alert, Container, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [adminEmail, setAdminEmail] = useState('')
    const [successful, setSuccessful] = useState(false)
    const handleBlur = event => {
        setAdminEmail(event.target.value)
    }
    const handleAdmin = event => {
        event.preventDefault()
        const admin = {email: adminEmail}
        const url = `https://salty-temple-09318.herokuapp.com/users/admin`
        fetch(url, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount){
                    setSuccessful(true)
                }else{
                    setSuccessful(false)
                }
            })


    }
    return (
        <div>
            <Container>
                <h1>Make an Admin section</h1>
                <form onSubmit={handleAdmin}>
                <TextField
                    id="standard-password-input"
                    label="abc@gmail.com"
                    type="email"
                    name="email"
                    onBlur={handleBlur}
                    sx={{width:"50%"}}
                    autoComplete="current-password"
                    variant="standard"
                />
                <button type="submit">Admin</button>
                {successful ? <Alert severity="success">{adminEmail} added Admin successfully!</Alert> : <Alert severity="warning">{adminEmail} You can't admin any user who don't Register here!</Alert>}
                </form>
            </Container>     
        </div>
    );
};

export default MakeAdmin;