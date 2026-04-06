import { useState } from "react";
import { useStore } from "../../store/useStore";

const TransactionForm = () => {
  const { addTransaction, role } = useStore();

  const [form, setForm] = useState({
    amount: "",
    category: "",
    type: "expense",
  });

  // 🔒 Only admin can see form
  if (role !== "admin") return null;

  const handleSubmit = () => {
    if (!form.amount || !form.category) {
      alert("Please fill all fields");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      amount: Number(form.amount),
      category: form.category,
      type: form.type,
    };

    console.log("ADDING:", newTransaction); // DEBUG

    addTransaction(newTransaction);

    // Reset form
    setForm({
      amount: "",
      category: "",
      type: "expense",
    });
  };

  return (
    <div className="bg-white p-5 rounded-xl border shadow-sm">
      <h3 className="mb-4 font-semibold text-lg">Add Transaction</h3>

      <div className="flex flex-wrap gap-3 items-center">
        <input
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={(e) =>
            setForm({ ...form, amount: e.target.value })
          }
          className="border px-3 py-2 rounded w-32"
        />

        <input
          type="text"
          placeholder="Category"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
          className="border px-3 py-2 rounded w-40"
        />

        <select
          value={form.type}
          onChange={(e) =>
            setForm({ ...form, type: e.target.value })
          }
          className="border px-3 py-2 rounded"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TransactionForm;