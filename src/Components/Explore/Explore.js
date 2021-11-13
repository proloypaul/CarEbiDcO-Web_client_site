import { Container, Grid} from '@mui/material';
import React, { useEffect, useState } from 'react';
import AllProducts from './AllProducts/AllProducts';

const Explore = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const url = `https://salty-temple-09318.herokuapp.com/products`
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


// https://ibb.co/wWkPbJg
// https://ibb.co/DK1rwh8
// https://ibb.co/tLSkFrC
// https://ibb.co/8Mpd9MJ


// https://i.ibb.co/Fwryfs3/care-eight.jpg
// https://i.ibb.co/HgKhG6x/care-nine.jpg
// https://i.ibb.co/Vwdr54B/care-ten.jpg
// 