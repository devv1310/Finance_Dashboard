export const exportCSV = (transactions) => {
  const csv = transactions
    .map((t) => `${t.date},${t.category},${t.amount}`)
    .join("\n");

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "transactions.csv";
  a.click();
};