export const calculateSummary = (transactions) => {
  let income = 0,
    expense = 0;

  transactions.forEach((t) =>
    t.type === "income" ? (income += t.amount) : (expense += t.amount)
  );

  return { income, expense, balance: income - expense };
};