export const formatCurrency = (amount) => {
  return `₹${amount.toLocaleString("en-IN")}`;
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-IN");
};