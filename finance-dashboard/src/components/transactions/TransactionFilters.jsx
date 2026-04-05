import { useStore } from "../../store/useStore";

const TransactionFilters = () => {
  const { search, setSearch, filterType, setFilterType } = useStore();

  return (
    <div className="flex gap-3">
      <input placeholder="Search transactions..." className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
    </div>
  );
};
export default TransactionFilters;