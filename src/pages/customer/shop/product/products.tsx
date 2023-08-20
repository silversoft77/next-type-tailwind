import { useState, useContext } from "react";
import { useProductsContext } from "../../../../context/product_context";
import { useFilterContext } from "../../../../context/filtered_context";
import ProductItem from "../../../../components/productItem";
export default function Products() {
  const { filtered_products } = useFilterContext();

  return (
    <div className="grid grid-cols-4 gap-3">
      {filtered_products.map((product, index) => (
        <ProductItem item={product} />
      ))}
    </div>
  );
}
