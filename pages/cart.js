import React, { useEffect, useState } from "react";
import CartProducts from "./cartProduct";
import { CartState } from "./context/context";

export default function Cart() {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => (acc += +curr.price * curr.qty) , 0));
  }, [cart]);

  return (
    <React.Fragment>
      {" "}
      <h1>In your cart {cart.length} </h1> <br />
      <div>
        {cart.map((product) => (
          <CartProducts product={product} />
        ))}
      </div>
      <br />
      <br />
      total {total}
    </React.Fragment>
  );
}
