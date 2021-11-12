import { Container, Grid} from '@mui/material';
import React, { useEffect, useState } from 'react';
import AllProducts from './AllProducts/AllProducts';

const Explore = () => {
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
            <h1>Explore section</h1>
            <Container sx={{my:10}}>
                <h1>Products section</h1>
                <Grid container spacing={2}>
                    {products.map(product => <Grid  key={product._id} item xs={12} md={4}>
                        <AllProducts product={product}></AllProducts>
                    </Grid>)}
                </Grid>
            </Container>      
        </div>
    );
};

export default Explore;