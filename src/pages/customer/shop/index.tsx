import Head from "next/head";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function Shop() {
  return (
    <div>
      <Header />
      <section className="text-gray-600 body-font py-32">
        <section className="mx-auto">
          <div className="container px-5 mx-auto lg:px-24 ">
            <div className="flex gap-5">
              <div className="w-1/5 bg-gray-200">
                <div className="search-input-div">
                    
                </div>
              </div>
              <div className="w-4/5 bg-gray-200">Sub Div 2 (4/12)</div>
            </div>
            <div className="flex flex-col w-full mb-4 text-left lg:text-center">
              <h1 className="mb-8 text-2xl Avenir font-semibold text-black">
                Product List
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-4">
              <div className="flex items-center justify-center">
                <img
                  src="/images/Google-Logo.webp"
                  alt="Google Logo"
                  className="block object-contain h-16 greyC"
                ></img>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/images/Shopify-Logo.svg"
                  alt="Shopify Logo"
                  className="block object-contain h-16 greyC"
                ></img>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/images/Cloudflare-Logo.svg"
                  alt="Cloudflare Logo"
                  className="block object-contain h-16 greyC"
                ></img>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/images/PayPal-Logo.png"
                  alt="Paypal Logo"
                  className="block object-contain h-16 greyC"
                ></img>
              </div>
            </div>
          </div>
        </section>
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div className="py-24 md:py-36">
              <h1 className="mb-5 text-6xl Avenir font-semibold text-gray-900">
                Contact US
              </h1>
              <h1 className="mb-9 text-2xl font-semibold text-gray-600">
                Enter your email address and get our newsletters straight away.
              </h1>
              <input
                placeholder="jack@example.com"
                name="email"
                type="email"
                autoComplete="email"
                className="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-900"
              ></input>{" "}
              <a
                className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
                href="/"
              >
                <span className="justify-center">Subscribe</span>
              </a>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}
