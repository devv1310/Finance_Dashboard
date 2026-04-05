import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const CategoryChart = ({ transactions }) => {
  const categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const data = Object.keys(categoryMap).map((key) => ({
    name: key,
    value: categoryMap[key],
  }));

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition">
      <h3 className="text-sm text-gray-500 mb-3">Spending Breakdown</h3>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data} dataKey="value" />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryChart;