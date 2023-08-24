import React, { useEffect, useReducer, useContext } from "react";
import { useProductsContext } from "./product_context";
import reducer from "../reducers/filter_reducer";
import { IFilteredProducts } from "../types/interface";

const initialState = {
  all_products: [],
  filtered_products: [],
  sort: 1,
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

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS", payload: products });
    dispatch({ type: "SORT_PRODUCTS", payload: products });
  }, [products, state.filter, state.sort])

  const updateSort = (e) => {
    let value = parseInt(e.target.value);
    dispatch({ type: "UPDATE_SORT", payload: { value } });
  };
  
  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "category") {
      value = e.target.value;
    }
    
    if(name === "search") {
      value = e.target.value
    }

    dispatch({ type: "UPDATE_FILTER", payload: { name, value } });
  };

  return (
    <FilterContext.Provider value={{ ...state, updateFilters, updateSort }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
