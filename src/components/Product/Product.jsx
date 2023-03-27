import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, price, seller, quantity, ratings } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h5 className="product-name">{name}</h5>
        <p>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings} star </p>
			</div>
			<button className="cart-btn">Add To Cart</button>
    </div>
  );
};

export default Product;
