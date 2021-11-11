import React, { useState } from 'react';
import { Container, TextField } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import useAuth from '../../../Context/useAuth';

const Review = () => {
    const {user} = useAuth()
    const initialData = {name: user.displayName, email: user.email, img: '', description: ''}
    const [reviewData, setReviewData] = useState(initialData)

    const handleBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const allReviewData = {...reviewData}
        allReviewData[field] = value;
        setReviewData(allReviewData)
    }
    const handleReview = event => {
        event.preventDefault()
        // console.log(reviewData)
        const url = `http://localhost:3800/reviews`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then()

    }

    return (
        <div>
            <h1 style={{fontWeight: 300}}>Hellow, Guys Give your Complement below</h1>
            <Container>
                <div>
                    <form onSubmit={handleReview}>
                        <div>
                            <TextField
                            id="outlined-password-input"
                            defaultValue={user?.displayName}
                            type="text"
                            name="name"
                            onBlur={handleBlur}
                            style={{width: "50%"}}
                            autoComplete="current-password"
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-password-input"
                            defaultValue={user?.email}
                            type="email"
                            name="email"
                            onBlur={handleBlur}
                            style={{width: "50%", marginTop: "10px"}}
                            autoComplete="current-password"
                            />
                        </div>
                        <div>
                            <TextField
                            id="outlined-password-input"
                            placeholder="hosting img link"
                            type="text"
                            name="img"
                            onBlur={handleBlur}
                            style={{width: "50%", margin: "10px 0"}}
                            autoComplete="current-password"
                            />
                        </div>
                        <div>
                            <TextareaAutosize
                            aria-label="minimum height"
                            minRows={3}
                            placeholder="write something about our Proucts"
                            name="description"
                            onBlur={handleBlur}
                            style={{ width: "50%", height: "100px" }}
                            />
                        </div>
                        <div>
                            <button type="submit" className="logBtn">Review</button>
                        </div>
                    
                    </form>
                </div>

            </Container>
            
        </div>
    );
};

export default Review;