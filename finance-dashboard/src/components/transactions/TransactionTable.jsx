import { useStore } from "../../store/useStore";
import TransactionRow from "./TransactionRow";

const TransactionTable = () => {
  const { transactions, search, filterType } = useStore();

  const filtered = transactions.filter((t) =>
    t.category.toLowerCase().includes(search.toLowerCase()) &&
    (filterType === "all" || t.type === filterType)
  );

  return (
    <table className="w-full mt-4">
      <tbody>
        {filtered.map((t) => (
          <TransactionRow key={t.id} t={t} />
        ))}
      </tbody>
    </table>
  );
};
export default TransactionTable;