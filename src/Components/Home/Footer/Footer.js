import { Container, Grid } from '@mui/material';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-clean" >
            <Container className="container" sx={{py:10}}>
                <Grid container spacing={2}>
                    <Grid item xs={4} md={3} className="item">
                        <h3>Products</h3>
                        <ul>
                            <li>Tesla</li>
                            <li>BMW</li>
                            <li>Honda</li>
                        </ul>
                    </Grid>
                    <Grid item xs={4} md={3} className="item">
                        <h3>About</h3>
                        <ul>
                            <li>Company</li>
                            <li>Team</li>
                            <li>Legacy</li>
                        </ul>
                    </Grid>
                    <Grid item xs={4} md={3} className="item">
                        <h3>Careers</h3>
                        <ul>
                            <li>Job openings</li>
                            <li>Employee success</li>
                            <li>Benefits</li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} md={3} className="social"><i className="fab fa-facebook-square"></i><i className="fab fa-twitter-square"></i><i className="fab fa-instagram-square"></i>
                        <p>CarEbiDcO &copy; 2021</p>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;