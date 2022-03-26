import React, { useEffect, useState } from "react";
import { pickOne } from "../../utilities/picOne/PicOne";
import Product from "../Product/Product";
import "./Shop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [watches, setWatch] = useState([]);
  // const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const addToCartHandler = (product) => {
    const newCart = [...watches, product];
    setWatch(newCart);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            product={product}
            addToCartHandler={addToCartHandler}
            key={product.id}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h3 className="font-color">Selected Watches</h3>
        {watches.map((watch) => (
          <div className="sidebar" key={watch.id}>
            <img src={watch.img} alt="" />
            <h4 key={watch.id}>{watch.name}</h4>
            <FontAwesomeIcon
              className="delete"
              icon={faDeleteLeft}
            ></FontAwesomeIcon>
          </div>
        ))}
        <button onClick={() => pickOne()} className="cart-button">
          <p className="button-text">PICK 1 FOR ME</p>
        </button>
        <br />
        <button className="cart-button">
          <p className="button-text">PICK AGAIN</p>
        </button>
      </div>
    </div>
  );
};

export default Shop;
