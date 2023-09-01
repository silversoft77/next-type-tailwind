import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import { useProductsContext } from "../../../../context/product_context";
import { single_product_url as url } from "../../../../utils/constants";
import ImageViewer from "../../../../components/imageViewer";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Rating } from "react-simple-star-rating";

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;
  const [rating, setRating] = useState(0);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const nameUpperCase = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const { singleProduct, fetchSingleProduct } = useProductsContext();

  useEffect(() => {
    id && fetchSingleProduct(`${url}${id}`);
  }, [id]);

  return (
    singleProduct && <div>
      <Header />
      <section className="text-gray-600 body-font py-32">
        <section className="mx-auto">
          <div className="container px-5 mx-auto lg:px-48">
            <div className="flex gap-5">
              <div className="w-6/12 border rounded-md flex justify-center">
                <ImageViewer images={singleProduct.images}></ImageViewer>
              </div>
              <div className="w-6/12 pl-5">
                <div className="">
                  <h2 className="mb-1 mt-0 text-3xl font-medium leading-tight text-gray-900">
                    {singleProduct.name && nameUpperCase(singleProduct.name)}
                  </h2>
                </div>
                <div className="mt-1">
                  <h3 className="mb-5 mt-0 text-2xl leading-tight text-gray-800 ">
                    $ {singleProduct?.price}
                  </h3>
                  <Rating
                    onClick={handleRating}
                    SVGstyle={{ display: "inline" }}
                    size={23}
                    initialValue={singleProduct.stars}
                    fillColor="#262626"
                  />
                  <p className="mb-2 mt-6 text-1xl text-primary leading-10 text-[16px]">
                    {singleProduct?.description}
                  </p>
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
