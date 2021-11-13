import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'; 

const productImg = {
    width: "250px",
    height: "150px",
    border: 0,
    borderRadius: "10px"
}
const Product = (props) => {
    const {Model, brand, img, _id} = props.product 
    return (
        <div className="product">
            <h3 className="product-title">{Model}, {brand}</h3>
            <img src={img} alt="Empty!" style={productImg}/>
            <div>
                <Link to={`/product/${_id}`}><button className="logBtn">Purchase</button></Link>
            </div>
        </div>
    );
};

export default Product;