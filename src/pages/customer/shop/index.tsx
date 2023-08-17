import Head from "next/head";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ListItem from "../../../components/listItem";

export default function Shop() {
  return (
    <div>
      <Header />
      <section className="text-gray-600 body-font py-32">
        <section className="mx-auto">
          <div className="container px-5 mx-auto lg:px-24 ">
            <div className="flex gap-5">
              <div className="w-1/5 bg-gray-200">
                <div className="">
                  <ListItem />
                  <ListItem />
                  <ListItem />
                  <ListItem />
                  <ListItem />
                </div>
              </div>
              <div className="w-4/5">
                <div className="flex justify-between">
                  <div className="">
                    <input
                      type="text"
                      className="w-50 py-3 px-4 block w-full border border-solid border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      placeholder="Search..."
                    />
                  </div>
                  <div className="mb-5">
                    <select className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 border border-solid">
                      <option selected>Sort By</option>
                      <option>Newest</option>
                      <option>Price</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  <div className="pb-2 mb-8 bg-gray-200 rounded-lg border border-solid border-gray-300 cursor-pointer">
                    <img className="hover:opacity-80" src="/assets/images/products/aa (1).jpg" alt="" />
                    <div className="pt-4 pl-3">
                      <div className="text-lg font-bold text-gray-600 pl-1">
                        Blue Jacket
                      </div>
                      <h3 className="text-1xl font-bold text-blue-500 pl-1">
                        $500
                      </h3>
                    </div>
                  </div>
                  <div className="pb-2 mb-8 bg-gray-200 rounded-lg border border-solid border-gray-300">
                    <img src="/assets/images/products/aa (1).jpg" alt="" />
                    <div className="pt-4 pl-3">
                      <div className="text-lg font-bold text-gray-600 pl-1">
                        Blue Jacket
                      </div>
                      <h3 className="text-1xl font-bold text-blue-500 pl-1">
                        $500
                      </h3>
                    </div>
                  </div>
                  <div className="pb-2 mb-8 bg-gray-200 rounded-lg border border-solid border-gray-300">
                    <img src="/assets/images/products/aa (1).jpg" alt="" />
                    <div className="pt-4 pl-3">
                      <div className="text-lg font-bold text-gray-600 pl-1">
                        Blue Jacket
                      </div>
                      <h3 className="text-1xl font-bold text-blue-500 pl-1">
                        $500
                      </h3>
                    </div>
                  </div>
                  <div className="pb-2 mb-8 bg-gray-200 rounded-lg border border-solid border-gray-300">
                    <img src="/assets/images/products/aa (1).jpg" alt="" />
                    <div className="pt-4 pl-3">
                      <div className="text-lg font-bold text-gray-600 pl-1">
                        Blue Jacket
                      </div>
                      <h3 className="text-1xl font-bold text-blue-500 pl-1">
                        $500
                      </h3>
                    </div>
                  </div>
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
