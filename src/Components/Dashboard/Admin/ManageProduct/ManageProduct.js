import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './ManageProduct.css';


const ManageProduct = () => {
    const [allProduct, setAllProduct] = useState([])

    useEffect(() => {
        const url = `https://salty-temple-09318.herokuapp.com/products`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setAllProduct(data)
            })
    }, [])

    const handleDltBtn = id => {
        // console.log(id)
        const confirmMsg = window.confirm("Would you like to  delete this Product?")
        if(confirmMsg){
            const url = `https://salty-temple-09318.herokuapp.com/products/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if(data.deletedCount > 0){
                        const withOutDeleteOrder = allProduct.filter(user => user._id !== id)
                        setAllProduct(withOutDeleteOrder)
                        alert("Deleted Product successfully!")
                    }
                })
        }else{
            alert("Your Product is Okay")
        }
    }
    
    return (
        <div>
            <h1 className="manageAllProduct-title">Manage <span>all</span> Produdct</h1>
            <Container sx={{my:5}}>
                <Grid container spacing={2}>
                    {allProduct.map(product => <Grid item xs={12} md={4} key={product._id}>
                        <div className="allProduct-container">
                            <div className="allProductImg">
                                <img src={product.img} alt="Empty"/>
                            </div>
                            <div className="content">
                                <h2>Model: {product.Model}</h2>
                                <h4>Brand: {product.brand}</h4>
                                <p>{product.description}</p>
                                <button className="dltBtnTwo" onClick={() => handleDltBtn(product._id)}>Delete</button>
                            </div>
                        </div>
                    </Grid>)}
                </Grid>
            </Container>
        </div>
    );
};

export default ManageProduct;