export default function Sort() {
  return (
    <div className="flex justify-end">
      <div className="mb-5">
        <select className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 border border-solid">
          <option selected>Sort By</option>
          <option>Newest</option>
          <option>Price</option>
        </select>
      </div>
    </div>
  );
}
