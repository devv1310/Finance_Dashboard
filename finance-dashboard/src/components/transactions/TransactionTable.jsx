import { useStore } from "../../store/useStore";
import TransactionRow from "./TransactionRow";
import TransactionFilters from "./TransactionFilters";

const TransactionTable = () => {
  const { transactions, search, filterType } = useStore();

  const filtered = transactions.filter((t) => {
    return (
      t.category.toLowerCase().includes(search.toLowerCase()) &&
      (filterType === "all" || t.type === filterType)
    );
  });

  return (
    <div className="bg-white p-5 rounded-xl border shadow-sm">
      <h3 className="mb-4 font-semibold">Transactions</h3>

      <TransactionFilters />

      <table className="w-full mt-4 text-sm">
        <thead className="text-gray-500 border-b">
          <tr>
            <th className="text-left p-3">Date</th>
            <th className="text-left">Category</th>
            <th className="text-left">Amount</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filtered.length > 0 ? (
            filtered.map((t) => (
              <TransactionRow key={t.id} t={t} />
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center p-4">
                No transactions found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;