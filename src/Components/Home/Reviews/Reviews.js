import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const url = `https://salty-temple-09318.herokuapp.com/reviews`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setReviews(data)
            })
    }, [])
    return (
        <div>
            <h1 className="section-title">User Reviews</h1>
            <Container>
                <Grid container spacing={2}>
                    {reviews.map(review => <Grid item xs={12} md={4} key={review._id}>
                        <div className="reviews-container">
                            <div className="reviewsImg">
                                <img src={review.img} alt="Empty"/>
                            </div>
                            <div className="title">
                                <h2><i className="fas fa-user"></i> {review.name}</h2>
                                <h4><i className="fas fa-envelope-open"></i> {review.email}</h4>
                                <p>{review.description}</p>
                            </div>
                        </div>
                    </Grid>)}
                </Grid>
            </Container>
        </div>
    );
};

export default Reviews;