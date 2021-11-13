import React from 'react';
import { Link } from 'react-router-dom';


const productImg = {
    width: "250px",
    height: "150px",
    border: 0,
    borderRadius: "10px"
}
const AllProducts = (props) => {
    const {Model, brand, img, _id} = props.product 
    // console.log(_id)

    return (
        <div>
            <div className="product">
                <h3 className="product-title">{Model}, {brand}</h3>
                <img src={img} alt="Empty!" style={productImg}/>
                <div>
                    <Link to={`/product/${_id}`}><button className="productBtn">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;