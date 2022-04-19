import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { CartState } from "./context/context";

export default function Home() {
  const {
    state: { products },
  } = CartState();

  return (
    <>
      <h1> Products in shop</h1>
      {products.map((product) => (
        <div id={product.id}>
          <img src={product.image}></img>
          <div> {product.name}</div>
          <div>{product.inStock} </div>
          <div> {product.price}</div>
          <div> {product.fastDelovery}</div>
          <div> {product.ratings}</div>
        </div>
      ))}
    </>
  );
}
