import { useStore } from "../../store/useStore";

const TransactionFilters = () => {
  const { search, setSearch, filterType, setFilterType } =
    useStore();

  return (
    <div className="flex gap-3 mb-3">
      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-3 py-2 rounded"
      />

      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        className="border px-3 py-2 rounded"
      >
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
    </div>
  );
};

export default TransactionFilters;