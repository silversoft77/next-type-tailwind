import Link from "next/link";
import { useFilterContext } from "../../../../context/filtered_context";
import ProductItem from "../../../../components/productItem";

export default function Products() {
  const { filtered_products } = useFilterContext();
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
