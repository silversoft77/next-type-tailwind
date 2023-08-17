import React, { Component } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import {StarRating} from 'star-rating-react-ts'

export default function Detail() {
  return (
    <div>
      <Header />
      <section className="text-gray-600 body-font py-32">
        <section className="mx-auto">
          <div className="container px-5 mx-auto lg:px-24 ">
            <div className="flex gap-5">
              <div className="w-5/12">
              </div>
              <div className="w-7/12">
                <div className="">
                  <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-primary">
                    Blue Jacket
                  </h1>
                </div>
                <div className="">
                  <h3 className="mb-2 mt-0 text-2xl font-medium leading-tight text-red-400 ">
                    $120
                  </h3>
                  <p className="mb-2 mt-0 text-2xl text-primary">
                    This is a blue jacket with a good quality and ...
                  </p>
                </div>
                <div>
                    <StarRating/>
                </div>
                <div>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add To Cart
                  </button>
                  <button className="bg-pink-400 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
                    Favourite
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
