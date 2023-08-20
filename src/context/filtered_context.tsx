import React, { useEffect, useReducer, useContext } from "react";
import { useProductsContext } from "./product_context";
import reducer from "../reducers/filter_reducer";
import { IFilteredProducts } from "../types/interface";

const initialState = {
  all_products: [],
  filtered_products: [],
  sort: "newest",
  filter: {
    text: "",
    company: "all",
    category: "all",
  },
};

const FilterContext = React.createContext<IFilteredProducts>({
  ...initialState,
});

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOAD_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
