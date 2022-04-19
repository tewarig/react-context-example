import React from "react";
import { CartState } from "../context/context";

export default function SingleProducts({ product }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <React.Fragment>
      <div id={product.id}>
        <img src={product.image}></img>
        <div> {product.name}</div>
        <div>{product.inStock} </div>
        <div> {product.price}</div>
        <div> {product.fastDelovery}</div>
        <div> {product.ratings}</div>
        {cart.some((p) => p.id === product.id) ? (
          <button
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: product,
              });
            }}
          >
            Remove from cart{" "}
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: product,
              });
            }}
          >
            {" "}
            Add to cart
          </button>
        )}
      </div>
    </React.Fragment>
  );
}
