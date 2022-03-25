import React from "react";
import "./Product.css";

const Product = (props) => {
  //   console.log(props);
  const { img, name, price } = props.product;
  return (
    <div className="item-container">
      <img src={img} alt="" />
      <h3> {name} </h3>
      <h4> ${price} </h4>
      <button className="btn-cart">
        <p>Add To Cart</p>
      </button>
    </div>
  );
};

export default Product;
