import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [watches, setWatch] = useState([]);
  console.log(watches);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const addToCartHandler = (product) => {
    const newCart = [...watches, product];
    setWatch(newCart);
    // const watchName = product.name;
    // const newWatch = [...watch, product];
    // setWatch(newWatch);
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
          <h4 key={watch.id}>{watch.name}</h4>
        ))}
        <button className="cart-button">
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
