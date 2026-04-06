import { useStore } from "../../store/useStore";

const Topbar = () => {
  const { role, setRole } = useStore();

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white border-b">
      <h2 className="text-lg font-semibold">Dashboard</h2>

      <select
        value={role}
        onChange={(e) => {
          console.log("Role:", e.target.value); // DEBUG
          setRole(e.target.value);
        }}
        className="border px-3 py-2 rounded"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
};

export default Topbar;