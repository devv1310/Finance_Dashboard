const Sidebar = () => {
  return (
    <div className="w-60 h-screen bg-white border-r p-6 fixed">
      <h1 className="text-2xl font-bold text-blue-600 mb-10">
        FinDash
      </h1>

      <nav className="flex flex-col gap-5 text-gray-600">
        <button className="text-left hover:text-blue-600 font-medium">
          Dashboard
        </button>

        <button className="text-left hover:text-blue-600 font-medium">
          Transactions
        </button>

        <button className="text-left hover:text-blue-600 font-medium">
          Insights
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;