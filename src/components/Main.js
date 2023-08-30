export default function Main() {
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
          <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
          E-Commerce Website
          </h1>
          <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
            Next, Typescript, and Tailwind CSS
          </p>
          <div className="flex justify-center">
            <a
              className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
              href="/customer/shop/product"
            >
              <span className="justify-center">Go to the Shop</span>
            </a>
          </div>
        </div>
        <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
          <img
            className="w-80 md:ml-1 ml-24"
            alt="iPhone-12"
            src="/images/iPhone-12-Mockup.png"
          ></img>
        </div>
      </div>
      <section className="mx-auto">
        <div className="container px-5 mx-auto lg:px-24 ">
          <div className="flex flex-col w-full mb-4 text-left lg:text-center">
            <h1 className="mb-8 text-2xl Avenir font-semibold text-black">
              Trusted by top-tier product companies
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
    </section>
  );
}
