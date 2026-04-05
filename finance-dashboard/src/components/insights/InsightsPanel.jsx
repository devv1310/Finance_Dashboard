// const InsightsPanel = ({ transactions }) => {
//   const totalExpense = transactions
//     .filter((t) => t.type === "expense")
//     .reduce((a, b) => a + b.amount, 0);

//   return (
//     <div className="bg-white border p-5 rounded-xl">
//       <p>Total Expense: ₹{totalExpense}</p>
//     </div>
//   );
// };
const InsightsPanel = ({ transactions }) => {
  const expenses = transactions.filter((t) => t.type === "expense");

  const total = expenses.reduce((a, b) => a + b.amount, 0);

  const categoryMap = {};
  expenses.forEach((t) => {
    categoryMap[t.category] =
      (categoryMap[t.category] || 0) + t.amount;
  });

  const topCategory = Object.entries(categoryMap).sort(
    (a, b) => b[1] - a[1]
  )[0];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border">
  <h3 className="text-gray-500 text-sm mb-2">Insights</h3>

  <p>Total Spend: ₹{total}</p>
  <p>Top Category: {topCategory?.[0]}</p>
</div>
  );
};
export default InsightsPanel;