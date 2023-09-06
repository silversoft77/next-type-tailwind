import { IProduct } from "../types/interface";
import { LOAD_PRODUCTS, UPDATE_FILTER, UPDATE_SORT, SORT_PRODUCTS, FILTER_PRODUCTS } from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
    };
  }

  if (action.type === UPDATE_FILTER) {
    const { name, value } = action.payload;

    if (name === "category")
      return {
        ...state,
        filter: {
          ...state.filter,
          category: value,
        },
      };

    if (name === "search") 
      return {
        ...state,
        filter: {
          ...state.filter,
          text: value,
        },
      };
  }

  if (action.type === UPDATE_SORT) {
    const { value } = action.payload;
    return {
      ...state,
      sort: value,
      filter: {
        ...state.filter,
      },
    };
  }

  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];
    if (sort === 1) {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }

    if (sort === 2) {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }

    return {
      ...state,
      filtered_products: tempProducts,
    };
  }

  if (action.type === FILTER_PRODUCTS) {
    const { all_products, filtered_products } = state;
    const { text, category, company } = state.filter;

    let tempProducts: IProduct[] = [...all_products];
    if (category !== "all") {
      tempProducts = all_products.filter(
        (product) => product.category === category
      );
    }

    if (text !== "") {
      tempProducts = tempProducts.filter(
        (product) => product.name.toLowerCase().includes(text.toLowerCase())
      );
    }

    return {
      ...state,
      filtered_products: tempProducts,
    };
  }
};

export default filter_reducer;
