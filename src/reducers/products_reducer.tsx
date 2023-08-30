const products_reducer = (state, action) => {
    if(action.type === "GET_PRODUCTS_SUCCESS") {
        return {
            ...state,
            products: action.payload
        }
    }

    if(action.type === "GET_SINGLE_PRODUCT_SUCCESS") {
        return {
            ...state,
            singleProduct: action.payload
        }
    }

    throw new Error(`No Matching "${action.type}" - action type`);
}

export default products_reducer;