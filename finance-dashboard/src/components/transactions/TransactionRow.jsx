import { formatCurrency, formatDate } from "../../utils/formatters";

const TransactionRow = ({ t }) => {
  return (
    <tr className="border-b hover:bg-gray-50 transition">
      <td className="py-3">{formatDate(t.date)}</td>

      <td className="text-gray-700">{t.category}</td>

      <td
        className={`font-medium ${
          t.type === "expense" ? "text-red-500" : "text-green-600"
        }`}
      >
        {formatCurrency(t.amount)}
      </td>
    </tr>
  );
};

export default TransactionRow;