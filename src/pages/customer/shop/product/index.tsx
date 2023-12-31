import { useEffect } from "react";
import Filter from "./filter";
import Sort from "./sort";
import Products from "./products";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";

export default function Shop() {
  useEffect(() => {});
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
}
