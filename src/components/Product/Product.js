import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";

const Product = (props) => {
  //   console.log(props);
  const { product, addToCartHandler } = props;
  const { img, name, price } = product;
  return (
    <div className="item-container">
      <img src={img} alt="" />
      <h2> {name} </h2>
      <h3> ${price} </h3>
      <button onClick={() => addToCartHandler(product)} className="btn-cart">
        <p className="btn-text">Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
