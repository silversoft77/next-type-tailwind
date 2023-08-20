const filter_reducer = (state, action) => {

    console.log(action.payload)
    if(action.type === "LOAD_PRODUCTS") {
        return {
            ...state,
            all_products: [...action.payload],
            filtered_products: [...action.payload]
        }
    }
}

export default filter_reducer;