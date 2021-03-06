import { Container, Grid } from '@mui/material';
import React from 'react';
import bannerTwo from '../../../images/banner-two.jpg';
import bannerThree from '../../../images/banner-three.jpg';
import './Banner.css';

const imgStyle = {
    width: "300px",
    height: "250px",
    border:0,
    borderRadius: "10px"
}
const Banner = () => {
    return (
        <div className="banner-container">
            <Container>
                <div className="banner-title">
                    <h1>The Wind Is Not Even <span>Close To Us</span></h1>
                </div>
                <Grid container spacing={2} sx={{textAlign: "center"}}>
                    <Grid item xs={12} md={6}>
                        <img src={bannerTwo} alt="Empty!" style={imgStyle}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={bannerThree} alt="Empty!" style={imgStyle}/>
                    </Grid>

                </Grid>
                <div style={{textAlign:"center"}}>
                    <button className="bannerBtn">Discover More</button>
                </div>
                
            </Container>
        </div>
    );
};

export default Banner;