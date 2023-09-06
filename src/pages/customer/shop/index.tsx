import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { categories } from "../../../utils/constants";
export default function Shop() {
  return (
    <div>
      <Header />
      <section className="text-gray-600 body-font py-32">
        <section className="mx-auto">
          <div className="container px-5 mx-auto lg:px-24 ">
            <div className="flex gap-5">
              <div className="w-1/5">
                <div className="">
                  <div className="mb-5">
                    <input
                      type="text"
                      className="w-50 py-3 px-4 block w-full border border-solid border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      placeholder="Search..."
                    />
                  </div>
                  <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <label className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                          Category
                        </label>
                      </div>
                    </li>
                    {categories.map((item, index) => (
                      <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div className="flex items-center pl-3">
                          <input
                            id="react-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            {item.cat_name}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-4/5">
                <div className="flex justify-end">
                  <div className="mb-5">
                    <select className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 border border-solid">
                      <option selected>Sort By</option>
                      <option>Newest</option>
                      <option>Price</option>
                    </select>
                  </div>
                </div>
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
                      <h3 className="text-1xl font-bold text-blue-500 pl-1">
                        $500
                      </h3>
                    </div>
                  </div>
                  <div className="pb-2 mb-8 bg-gray-100 rounded-lg border border-solid border-gray-200 cursor-pointer">
                    <img src="/assets/images/products/aa (2).jpg" alt="" />
                    <div className="pt-4 pl-3">
                      <div className="text-lg font-bold text-gray-600 pl-1">
                        Blue Jacket
                      </div>
                      <h3 className="text-1xl font-bold text-blue-500 pl-1">
                        $500
                      </h3>
                    </div>
                  </div>
                  <div className="pb-2 mb-8 bg-gray-100 rounded-lg border border-solid border-gray-200 cursor-pointer">
                    <img src="/assets/images/products/aa (3).jpg" alt="" />
                    <div className="pt-4 pl-3">
                      <div className="text-lg font-bold text-gray-600 pl-1">
                        Blue Jacket
                      </div>
                      <h3 className="text-1xl font-bold text-blue-500 pl-1">
                        $500
                      </h3>
                    </div>
                  </div>
                  <div className="pb-2 mb-8 bg-gray-100 rounded-lg border border-solid border-gray-200 cursor-pointer">
                    <img src="/assets/images/products/aa (4).jpg" alt="" />
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
