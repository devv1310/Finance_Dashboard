import { useStore } from "../../store/useStore";

const Topbar = () => {
  const { role, setRole } = useStore();

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200">
      <h2 className="text-lg font-medium">Dashboard</h2>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
};

export default Topbar;