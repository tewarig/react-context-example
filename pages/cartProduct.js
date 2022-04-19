import React, { useState, useEffect } from "react";
import { CartState } from "./context/context";

export default function CartProducts({ product }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <>
      {" "}
      <img src={product.image} />
      <div>
        {" "}
        {product.name} {product.price}
      </div>{" "}
      items {product.qty}
      <br />
      <button
        onClick={() => {
          dispatch({
            type: "REMOVE_FROM_CART",
            payload: product,
          });
        }}
      >
        {" "}
        Remove
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "Increment_qty",
            payload: product,
          });
        }}
      >
        {" "}
        Add More
      </button>
      {/* Decrement_qty */}
      <button
        onClick={() => {
          dispatch({
            type: "Decrement_qty",
            payload: product,
          });
        }}
      >
        {" "}
        Remove items
      </button>
      <br />
    </>
  );
}
