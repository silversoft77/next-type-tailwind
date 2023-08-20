import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { ProductsProvider } from "../context/product_context";
import App from "./app";

export default function Home() {
  return (
    <ProductsProvider>
      <App/>
    </ProductsProvider>
  );
}
