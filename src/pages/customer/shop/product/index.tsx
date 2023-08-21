import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import { ProductsProvider } from "../../../../context/product_context";
import { FilterProvider } from "../../../../context/filtered_context";
import Filter from "./filter";
import Sort from "./sort";
import Products from "./products";
import { useState, useEffect } from "react";
export default function Shop() {
  useEffect(() => {});
  return (
    <div>
      <Header />
      <ProductsProvider>
        <FilterProvider>
        <section className="text-gray-600 body-font py-32">
          <section className="mx-auto">
            <div className="container px-5 mx-auto lg:px-24 ">
              <div className="flex gap-5">
                <div className="w-1/5">
                  <Filter />
                </div>
                <div className="w-4/5">
                  <Sort />
                  <Products />
                </div>
              </div>
            </div>
          </section>
        </section>
        </FilterProvider>
      </ProductsProvider>
      <Footer />
    </div>
  );
}
