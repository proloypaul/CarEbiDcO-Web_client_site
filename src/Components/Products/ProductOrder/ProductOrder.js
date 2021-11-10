import { Container, Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ProductOrder.css'

const ProductOrder = () => {
    // const productId = useParams()
    // console.log(productId)
    const {productId} = useParams()
    const [userOrder, setUserOrder] = useState([])

    useEffect(() => {
        const url = `http://localhost:3800/products/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUserOrder(data)
                // console.log(data)
            })
    }, [])
    // console.log(userOrder)

    const imgStyle = {
        weight: "400px",
        height: "250px",
        border: 0,
        borderRadius:"10px",
        paddingTop: "10px"
        
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} className="productOrder-container">
                    <div className="productOrder">
                        <div style={{textAlign: "center"}}>
                            <img src={userOrder.img} alt="Empty!" style={imgStyle}/>
                        </div>
                        <div style={{width: "300px", paddingLeft:"10px"}}>
                            <div style={{display:"flex", justifyContent:"space-between"}}>
                                <h3>Model: {userOrder.Model}</h3>
                                <h3>Brand: {userOrder.brand}</h3>
                            </div>
                            <h3>Price: ${userOrder.price}</h3>
                            <p>{userOrder.description}</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} className="orderForm">
                    <form>
                    <TextField
                    id="outlined-password-input"
                    label="Your Name"
                    type="text"
                    name="name"
                    style={{width: "80%"}}
                    autoComplete="current-password"
                    />
                    <TextField
                    id="outlined-password-input"
                    label="abc@gmail.com"
                    type="email"
                    name="email"
                    style={{width: "80%", margin:"10px 0px"}}
                    autoComplete="current-password"
                    />
                    <TextField
                    id="outlined-password-input"
                    label="phone"
                    type="number"
                    name="phone"
                    style={{width: "80%"}}
                    autoComplete="current-password"
                    />
                    <TextField
                    id="outlined-password-input"
                    label="Present Address"
                    type="text"
                    name="address"
                    style={{width: "80%", margin: "10px 0px"}}
                    autoComplete="current-password"
                    />
                    <div>
                        <button type="submit">PlaceOrder</button>
                    </div>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ProductOrder;