import { calculateSummary } from "../../utils/calculations";

const SummaryCards = ({ transactions }) => {
  const { income, expense, balance } = calculateSummary(transactions);

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <Card title="Balance" value={balance} color="text-blue-600" />
      <Card title="Income" value={income} color="text-green-600" />
      <Card title="Expenses" value={expense} color="text-red-500" />
    </div>
  );
};

const Card = ({ title, value, color }) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-lg transition duration-200">
    <p className="text-gray-500 text-sm">{title}</p>
    <h2 className={`text-2xl font-bold mt-2 ${color}`}>
      ₹{value}
    </h2>
  </div>
);

export default SummaryCards;