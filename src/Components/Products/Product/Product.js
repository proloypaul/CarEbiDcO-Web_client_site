import { borderRadius } from '@mui/system';
import React from 'react';
import './Product.css'; 

const productImg = {
    width: "250px",
    height: "150px",
    border: 0,
    borderRadius: "10px"
    
}
const Product = (props) => {
    const {Model, brand, img, description} = props.product 
    return (
        <div className="product">
            <h3 className="product-title">{Model}, {brand}</h3>
            <img src={img} alt="Empty!" style={productImg}/>
            <div>
                <button className="productBtn">Book Now</button>
            </div>
        </div>
    );
};

export default Product;