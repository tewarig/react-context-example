import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import SingleProducts from "./comp/products";
import { CartState } from "./context/context";

export default function Home() {
  const {
    state: { products, cart },
  } = CartState();

  return (
    <>
      <h1>
        {" "}
        Products in shop{" "}
        <Link href="/cart">
          <a>cart:{cart.length} </a>
        </Link>{" "}
      </h1>
      <div></div>
      {products.map((product) => (
        <SingleProducts product={product} />
      ))}
    </>
  );
}
