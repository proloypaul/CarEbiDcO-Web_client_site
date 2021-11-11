import { Container, Grid} from '@mui/material';
import React, {useState, useEffect} from 'react';
import Header from '../Home/Header/Header';
import Product from './Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const url = `http://localhost:3800/products`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setProducts(data)
            })
    }, [])
    return (
        <div>
            <Header></Header>
            <Container sx={{my:10}}>
                <h1>Products section</h1>
                <Grid container spacing={2}>
                    {products.map(product => <Grid  key={product._id} item xs={12} md={4}>
                        <Product product={product}></Product>
                    </Grid>)}
                </Grid>
            </Container>
        </div>
    );
};

export default Products;