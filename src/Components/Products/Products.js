import { Container, Grid} from '@mui/material';
import React, {useState, useEffect} from 'react';
import Product from './Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    const size =  6 ;
    useEffect(() => {
        const url = `http://localhost:3800/products?size=${size}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setProducts(data)
            })
    }, [])
    return (
        <div>
            <Container sx={{my:10}}>
                <h1 className="section-title">Products</h1>
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