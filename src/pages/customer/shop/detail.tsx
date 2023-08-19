import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

export default function Detail() {
  const [rating, setRating] = useState(0);
  const handleRating = (rate: number) => {
    setRating(rate);

    // other logic
  };
  return (
    <div>
      <Header />
      <section className="text-gray-600 body-font py-32">
        <section className="mx-auto">
          <div className="container px-5 mx-auto lg:px-24 ">
            <div className="flex gap-5">
              <div className="w-5/12 border rounded-md flex justify-center">
                <img
                  className="pt-6"
                  src="/assets/images/products/aa (1).jpg"
                  alt=""
                />
              </div>
              <div className="w-7/12">
                <div className="">
                  <h2 className="mb-1 mt-0 text-3xl font-medium leading-tight text-gray-900">
                    Blue Jacket
                  </h2>
                </div>
                <div className="mt-1">
                  <h3 className="mb-5 mt-0 text-2xl leading-tight text-gray-800 ">
                    $120
                  </h3>
                  <Rating
                    onClick={handleRating}
                    SVGstyle={{ 'display': 'inline'}}
                    size={23}
                    fillColor="#262626"
                    /* Available Props */
                  />
                  <p className="mb-2 mt-6 text-1xl text-primary">
                    To create a responsive image gallery in React, you can use a
                    combination of CSS Grid and media queries to adjust the
                    layout based on the screen size. In this example, we have an
                    array of image objects that contain the image source and alt
                    text.
                  </p>
                </div>
                <div className="flex justify-between gap-3">
                  <button className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Order Now
                  </button>
                  <button className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}
