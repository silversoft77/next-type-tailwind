import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { products_url as url } from "../utils/constants";
import { IAllProducts } from "../types/interface";

const initialState = {
  products: [],
  singleProduct: {

  }
};

const ProductsContext = React.createContext<IAllProducts>({
  ...initialState,
});

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchProducts(url);
  }, []);

  const fetchProducts = async (url: string) => {
    try {
      const response = await axios.get(url);
      const products = response.data;
      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: products });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSingleProduct = async (url: string) => {
    try {
      const response = await axios.get(url);
      const product = response.data;
      dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: product });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductsContext.Provider value={{ ...state, fetchSingleProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
