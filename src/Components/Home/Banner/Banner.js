import { Container, Grid } from '@mui/material';
import React from 'react';
import bannerTwo from '../../../images/banner-two.jpg';
import bannerThree from '../../../images/banner-three.jpg';
import './Banner.css';

const imgStyle = {
    width: "400px",
    height: "250px",
    border:0,
    borderRadius: "10px"
}
const Banner = () => {
    return (
        <div className="banner-container">
            <h1>Banner section</h1>
            <Container>
                <h1>Banner title </h1>
                <Grid container spacing={2} sx={{textAlign: "center"}}>
                    <Grid item xs={12} md={6}>
                        <img src={bannerTwo} alt="Empty!" style={imgStyle}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={bannerThree} alt="Empty!" style={imgStyle}/>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default Banner;