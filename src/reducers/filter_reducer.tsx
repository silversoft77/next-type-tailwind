import { IProduct } from "../types/interface";

const filter_reducer = (state, action) => {
  if (action.type === "LOAD_PRODUCTS") {
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
    };
  }

  if (action.type === "UPDATE_FILTER") {
    const { name, value } = action.payload;
    return {
      ...state,
      filters: {
        ...state.filters,
        [name]: value,
      },
    };
  }

  if (action.type === "FILTER_PRODUCTS") {
    const { all_products } = state;
    const { text, category, company } = state.filter;

    let tempProducts: IProduct[] = [...all_products];
    if (category !== "all") {
        tempProducts = all_products.filter((product) =>product.category === category)
    }
    return {
      ...state,
      filtered_products: tempProducts
    };
  }
};

export default filter_reducer;
