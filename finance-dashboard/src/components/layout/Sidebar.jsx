const Sidebar = () => {
  return (
    <div className="w-60 h-screen bg-white border-r border-gray-200 p-6 fixed">
      <h1 className="text-xl font-bold mb-8 text-blue-600">
        FinDash
      </h1>

      <nav className="flex flex-col gap-4">
        <button className="text-left text-gray-700 hover:text-blue-600 font-medium">
          Dashboard
        </button>

        <button className="text-left text-gray-700 hover:text-blue-600 font-medium">
          Transactions
        </button>

        <button className="text-left text-gray-700 hover:text-blue-600 font-medium">
          Insights
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;