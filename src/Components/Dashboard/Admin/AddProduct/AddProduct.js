import { Container, TextField } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import React, { useState } from 'react';

const AddProduct = () => {
    const [addProduct, setAddProduct] = useState({})

    const handleBlur = event => {
        const field = event.target.name 
        const value = event.target.value 
        const productData = {...addProduct}
        productData[field] = value 
        setAddProduct(productData)
    }
    const handleProduct = event => {
        event.preventDefault()
        // console.log(addProduct)
        const url = `http://localhost:3800/products`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert("Product Submited!")
                }
            })
    }
    return (
        <div>
            <Container>
                <form onSubmit={handleProduct}>
                    <div>
                        <TextField
                        id="outlined-password-input"
                        label="hosting img link"
                        type="text"
                        name="img"
                        onBlur={handleBlur}
                        style={{width: "50%", margin: "10px 0"}}
                        autoComplete="current-password"
                        />
                    </div>
                    <div>
                        <TextField
                        id="outlined-password-input"
                        label="Enter Model Name"
                        type="text"
                        name="Model"
                        onBlur={handleBlur}
                        style={{width: "50%"}}
                        autoComplete="current-password"
                        />
                    </div>
                    <div>
                        <TextField
                        id="outlined-password-input"
                        label="Enter Brand Name"
                        type="text"
                        name="brand"
                        onBlur={handleBlur}
                        style={{width: "50%", margin: "10px 0px"}}
                        autoComplete="current-password"
                        />
                    </div>
                    <div>
                        <TextareaAutosize
                        aria-label="minimum height"
                        minRows={3}
                        placeholder="Product description..... "
                        name="description"
                        onBlur={handleBlur}
                        style={{ width: "50%", height: "100px" }}
                        />
                    </div>
                    <div>
                        <TextField
                        id="outlined-password-input"
                        label="Enter product price"
                        type="number"
                        name="price"
                        onBlur={handleBlur}
                        style={{width: "50%", margin: "10px 0px"}}
                        autoComplete="current-password"
                        />
                    </div>
                    <div>
                        <button type="submit" className="logBtn">Upload Product</button>
                    </div>
                    
                </form>
            </Container>
        </div>
    );
};

export default AddProduct;