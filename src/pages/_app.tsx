import Head from "next/head";
import { AppProps } from "next/app";
import { ProductsProvider } from "../context/product_context";
import { FilterProvider } from "../context/filtered_context";
import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProductsProvider>
      <FilterProvider>
        <Head>
          <title>dfsdf</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </FilterProvider>
    </ProductsProvider>
  );
}

export default MyApp;
