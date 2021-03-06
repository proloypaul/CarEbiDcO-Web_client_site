import { Container, TextField } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import React, { useState } from 'react';
import './AddProduct.css';

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
        const url = `https://salty-temple-09318.herokuapp.com/products`
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
                    alert("Product Uploaded!")
                    event.target.reset()
                }
            })
    }
    return (
        <div className="addProduct-container">
            <Container className="addProduct-form">
                <form onSubmit={handleProduct}>
                    <div>
                        <TextField
                        id="outlined-password-input"
                        label="Hosting img link"
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
                        label="Model Name"
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
                        label="Brand Name"
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
                        style={{ width: "50%", height: "100px"}}
                        />
                    </div>
                    <div>
                        <TextField
                        id="outlined-password-input"
                        label="Price"
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