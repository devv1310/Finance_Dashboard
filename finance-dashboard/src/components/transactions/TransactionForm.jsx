import toast from "react-hot-toast";

const handleSubmit = () => {
  if (!form.amount || !form.category) {
    toast.error("Fill all fields");
    return;
  }

  addTransaction({
    ...form,
    id: Date.now(),
    date: new Date().toISOString().split("T")[0],
    amount: Number(form.amount),
  });

  toast.success("Transaction added!");
};