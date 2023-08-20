import { useState, useContext } from "react";
import { useProductsContext } from "../../../../context/product_context";
export default function Products() {
  const [check, setCheck] = useState(0);
  const checkingItem = () => {};

  return (
    <div className="grid grid-cols-4 gap-3">
      <div className="pb-2 mb-8 bg-gray-100 rounded-lg border border-solid border-gray-200 cursor-pointer">
        <img
          className="hover:opacity-80"
          src="/assets/images/products/aa (1).jpg"
          alt=""
        />
        <div className="pt-4 pl-3">
          <div className="text-lg font-bold text-gray-600 pl-1">
            Blue Jacket
          </div>
          <h3 className="text-1xl font-bold text-blue-500 pl-1">$500</h3>
        </div>
      </div>
      <div className="pb-2 mb-8 bg-gray-100 rounded-lg border border-solid border-gray-200 cursor-pointer">
        <img src="/assets/images/products/aa (2).jpg" alt="" />
        <div className="pt-4 pl-3">
          <div className="text-lg font-bold text-gray-600 pl-1">
            Blue Jacket
          </div>
          <h3 className="text-1xl font-bold text-blue-500 pl-1">$500</h3>
        </div>
      </div>
      <div className="pb-2 mb-8 bg-gray-100 rounded-lg border border-solid border-gray-200 cursor-pointer">
        <img src="/assets/images/products/aa (3).jpg" alt="" />
        <div className="pt-4 pl-3">
          <div className="text-lg font-bold text-gray-600 pl-1">
            Blue Jacket
          </div>
          <h3 className="text-1xl font-bold text-blue-500 pl-1">$500</h3>
        </div>
      </div>
      <div className="pb-2 mb-8 bg-gray-100 rounded-lg border border-solid border-gray-200 cursor-pointer">
        <img src="/assets/images/products/aa (4).jpg" alt="" />
        <div className="pt-4 pl-3">
          <div className="text-lg font-bold text-gray-600 pl-1">
            Blue Jacket
          </div>
          <h3 className="text-1xl font-bold text-blue-500 pl-1">$500</h3>
        </div>
      </div>
    </div>
  );
}
