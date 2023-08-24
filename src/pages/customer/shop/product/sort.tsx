import React, { useEffect } from "react";
import { useFilterContext } from "../../../../context/filtered_context";
export default function Sort() {
  const { sort, updateSort } = useFilterContext();

  return (
    <div className="flex justify-end">
      <div className="mb-5">
        <select
          name="sort"
          value={sort}
          onChange={updateSort}
          className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 border border-solid"
        >
          <option value={1}>Low to High</option>
          <option value={2}>High to Low</option>
        </select>
      </div>
    </div>
  );
}
