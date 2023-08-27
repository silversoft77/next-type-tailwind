import { useState, useContext } from "react";
import Link from "next/link";
import { useProductsContext } from "../../../../context/product_context";
import { useFilterContext } from "../../../../context/filtered_context";
import ProductItem from "../../../../components/productItem";
import { useRouter } from "next/router";
export default function Products() {
  const { filtered_products } = useFilterContext();
  const router = useRouter();
  return (
    <div className="grid grid-cols-4 gap-3">
      {filtered_products.map((product, index) => (
        <Link
          href={"/customer/shop/product/[id]"}
          as={`/customer/shop/product/${product.id}`}
        >
          <ProductItem item={product} />
        </Link>
      ))}
    </div>
  );
}
