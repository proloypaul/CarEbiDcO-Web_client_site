import { Container } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router';

const ProductOrder = () => {
    // const productId = useParams()
    // console.log(productId)
    const {productId} = useParams()
    return (
        <Container>
            <h1>ProductOrder section {productId}</h1>
        </Container>
    );
};

export default ProductOrder;