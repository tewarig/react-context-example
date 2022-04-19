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
      <br />
    </>
  );
}
