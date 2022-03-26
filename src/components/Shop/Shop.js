import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [watch, setWatch] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const addToCartHandler = (product) => {
    console.log(product.name);
    // const watchName = product.name;
    const newWatch = [...watch, product];
    setWatch(newWatch);
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
        <h3>Selected Watches {watch.length} </h3>
        <p>Name: {watch.name} </p>
        <button className="cart-button">
          <p className="button-text">PICK 1 FOR ME</p>
        </button>
        <br />
        <button className="cart-button">
          <p className="button-text">CHOOSE AGAIN</p>
        </button>
      </div>
    </div>
  );
};

export default Shop;
