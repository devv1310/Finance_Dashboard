import { useState } from "react";
import { useStore } from "../../store/useStore";

const TransactionRow = ({ t }) => {
  const {
    role,
    transactions,
    setTransactions,
    updateTransaction,
  } = useStore();

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...t });

  // 🔴 DELETE
  const handleDelete = () => {
    const updated = transactions.filter((item) => item.id !== t.id);
    setTransactions(updated);
  };

  // 🟢 SAVE EDIT
  const handleSave = () => {
    updateTransaction({
      ...editData,
      amount: Number(editData.amount),
    });
    setIsEditing(false);
  };

  return (
    <tr
      className={`border-b ${
        isEditing ? "bg-yellow-50" : "hover:bg-gray-50"
      }`}
    >
      {/* DATE */}
      <td className="p-3">
        {isEditing ? (
          <input
            type="date"
            value={editData.date}
            onChange={(e) =>
              setEditData({ ...editData, date: e.target.value })
            }
            className="border p-1 rounded"
          />
        ) : (
          t.date
        )}
      </td>

      {/* CATEGORY */}
      <td>
        {isEditing ? (
          <input
            value={editData.category}
            onChange={(e) =>
              setEditData({
                ...editData,
                category: e.target.value,
              })
            }
            className="border p-1 rounded"
          />
        ) : (
          t.category
        )}
      </td>

      {/* AMOUNT */}
      <td>
        {isEditing ? (
          <input
            type="number"
            value={editData.amount}
            onChange={(e) =>
              setEditData({
                ...editData,
                amount: e.target.value,
              })
            }
            className="border p-1 rounded w-24"
          />
        ) : (
          <span
            className={
              t.type === "expense"
                ? "text-red-500 font-medium"
                : "text-green-600 font-medium"
            }
          >
            ₹{t.amount}
          </span>
        )}
      </td>

      {/* ACTIONS (ADMIN ONLY) */}
      {role === "admin" && (
        <td className="p-2 flex gap-2">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="text-green-600 hover:underline"
              >
                Save
              </button>

              <button
                onClick={() => setIsEditing(false)}
                className="text-gray-500 hover:underline"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="text-blue-600 hover:underline"
              >
                Edit
              </button>

              <button
                onClick={handleDelete}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </>
          )}
        </td>
      )}
    </tr>
  );
};

export default TransactionRow;