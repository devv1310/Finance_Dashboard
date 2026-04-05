import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BalanceChart = ({ transactions }) => {
  let balance = 0;

  const data = transactions.map((t) => {
    balance += t.type === "income" ? t.amount : -t.amount;

    return {
      date: t.date,
      balance,
    };
  });

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition">
     <h3 className="text-sm text-gray-500 mb-4">Balance Trend</h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#2563eb"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceChart;