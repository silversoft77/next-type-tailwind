import { categories } from "../../../../utils/constants";
import { useFilterContext } from "../../../../context/filtered_context";
import { getUniqueValues } from "../../../../utils/helpers";
export default function Filter() {
  const {
    all_products,
    filtered_products,
    sort,
    updateFilters,
    filter: { text, company, category },
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  return (
    <div className="">
      <div className="mb-5">
        <input
          type="text"
          name="search"
          value={text}
          className="w-50 py-3 px-4 block w-full border border-solid border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
          placeholder="Search..."
          onChange={updateFilters}
        />
      </div>
      <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {categories.map((item, index) => (
          <li className={`w-full border-b border-gray-200 dark:border-gray-600 hover:bg-gray-300 ${item === category ? "bg-gray-300": ""}  cursor-pointer`}>
            <div className="flex items-center pl-3">
              <button
                name="category"
                value={item}
                onClick={updateFilters}
                className={`w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left`}
              >
                {item}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
