import { useState } from "react";
export default function ProductItem({item}) {
  return (
    <div className="pb-2 mb-8 bg-gray-100 rounded-lg border border-solid border-gray-200 cursor-pointer">
      <img
        className="object-cover hover:opacity-80"
        src={item.image}
        alt=""
        style={{ width: "300px", height: "200px" }}
      />
      <div className="pt-4 pl-3">
        <div className="text-lg font-bold text-gray-600 pl-1">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</div>
        <h3 className="text-1xl font-bold text-blue-500 pl-1">{`$ ${item.price}`}</h3>
      </div>
    </div>
  );
}
