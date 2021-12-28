import { Container, Grid } from '@mui/material';
import React from 'react';
import careQualityImg from '../../images/careFunctionality.jpg'
import './CareQuality.css'

const CareQuality = () => {
    return (
        <div style={{background: "#000000", color: "orange"}}>
            <Container sx={{my:5, py:5}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <h1 className="section-title"><span>Car Quality</span></h1>
                        <p style={{fontWeight:"400", color: "orange"}}>Good cars are safe, fast,affordable to purchase, economical to operate, reliable, capacius, comfortable and attractive. No, of course you can't get all of those characteristics in one car</p>
                        <li><b>2019+ Chevy Camaro</b></li>
                        <li><b>2019+ Chevy Corvette</b></li>
                        <li><b>2018+ Dodge Charger</b></li>
                        <li><b>2019+ Dodge Challenger</b></li>
                        <li><b>2018+ Ford Mustang</b></li>
                        <li><b>2019+ Ford F-150</b></li>
                        <li><b>2020+ Toyota Supra</b></li>
                        <li><b>2018+ Subaru WRX/STi</b></li>
                        <li><b>2016+ BMW i8m, M3, M4, X5</b></li>
                        <li><b>2015+ Tesla Model X, 3, Y</b></li>
                        
                    </Grid>
                    <Grid item xs={12} md={6} sx={{textAlign: "center"}} className='careQualityImg'>
                        <img src={careQualityImg} alt="Empty!"/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default CareQuality;