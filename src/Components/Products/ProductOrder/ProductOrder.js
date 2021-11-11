import { Alert, Container, Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../Context/useAuth';
import './ProductOrder.css'

const ProductOrder = () => {
    const {user} = useAuth()
    const initialData = {name: user.displayName, email: user.email, phone: '', presentAddress: ''}
    // const productId = useParams()
    // console.log(productId)
    const {productId} = useParams()
    const [productDetail, setProductDetail] = useState([])
    const [orderData, setOrderData] = useState(initialData)
    const [successful, setSuccessful] = useState(false)

    useEffect(() => {
        const url = `http://localhost:3800/products/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProductDetail(data)
                // console.log(data)
            })
    }, [])
    // console.log(userOrder)

    const handleBlur = event => {
        const field = event.target.name;
        const value = event.target.value; 
        const allOrderData = {...orderData}
        allOrderData[field] = value;
        setOrderData(allOrderData)

    }
    const handleOrder = event => {
        event.preventDefault()
        // console.log(orderData)
        const userOrder = {
            ...orderData,
            date: new Date().toLocaleDateString()
        }
        // console.log(userOrder)
        const url = `http://localhost:3800/orders`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userOrder)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if(data.acknowledged){
                    setSuccessful(true)
                    event.target.reset()
                }
            })
    }


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
                            <img src={productDetail.img} alt="Empty!" style={imgStyle}/>
                        </div>
                        <div style={{width: "300px", paddingLeft:"10px"}}>
                            <div style={{display:"flex", justifyContent:"space-between"}}>
                                <h3>Model: {productDetail.Model}</h3>
                                <h3>Brand: {productDetail.brand}</h3>
                            </div>
                            <h3>Price: ${productDetail.price}</h3>
                            <p>{productDetail.description}</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} className="orderForm">
                    <form onSubmit={handleOrder}>
                    <TextField
                    id="outlined-password-input"
                    defaultValue= {user.displayName}
                    type="text"
                    name="name"
                    onBlur={handleBlur}
                    style={{width: "80%"}}
                    autoComplete="current-password"
                    />
                    <TextField
                    id="outlined-password-input"
                    defaultValue={user.email}
                    type="email"
                    name="email"
                    onBlur={handleBlur}
                    style={{width: "80%", margin:"10px 0px"}}
                    autoComplete="current-password"
                    />
                    <TextField
                    id="outlined-password-input"
                    label="phone"
                    type="number"
                    name="phone"
                    onBlur={handleBlur}
                    style={{width: "80%"}}
                    autoComplete="current-password"
                    />
                    <TextField
                    id="outlined-password-input"
                    label="Present Address"
                    type="text"
                    name="presentAddress"
                    onBlur={handleBlur}
                    style={{width: "80%", margin: "10px 0px"}}
                    autoComplete="current-password"
                    />
                    <TextField
                    id="outlined-password-input"
                    label="Model, Brand"
                    type="text"
                    name="OrderItem"
                    onBlur={handleBlur}
                    style={{width: "80%", margin: "10px 0px"}}
                    autoComplete="current-password"
                    />
                    <div>
                        <button type="submit" className="logBtn">PlaceOrder</button>
                    </div>
                    </form>
                </Grid>
            </Grid>
            {successful && <Alert severity="success">Your Order Submit Successfully! Enjoy Your Time</Alert>}
        </Container>
    );
};

export default ProductOrder;