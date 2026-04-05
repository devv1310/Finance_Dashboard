import { useStore } from "../../store/useStore";
import TransactionRow from "./TransactionRow";

const TransactionTable = () => {
  const { transactions, search, filterType } = useStore();

  const filtered = transactions.filter((t) =>
    t.category.toLowerCase().includes(search.toLowerCase()) &&
    (filterType === "all" || t.type === filterType)
  );

  return (
   <table className="w-full bg-white rounded-xl shadow-sm border overflow-hidden">
  <thead className="bg-gray-50 text-gray-600 text-sm">
    <tr>
      <th className="text-left p-3">Date</th>
      <th className="text-left">Category</th>
      <th className="text-left">Amount</th>
    </tr>
  </thead>

  <tbody>
    {filtered.map((t) => (
      <tr className="border-t hover:bg-gray-50 transition">
        <td className="p-3">{t.date}</td>
        <td>{t.category}</td>
        <td className={t.type === "expense" ? "text-red-500" : "text-green-600"}>
          ₹{t.amount}
        </td>
      </tr>
    ))}
  </tbody>
</table>
  );
};
export default TransactionTable;