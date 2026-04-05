import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import SummaryCards from "../components/dashboard/SummaryCards";
import BalanceChart from "../components/dashboard/BalanceChart";
import CategoryChart from "../components/dashboard/CategoryChart";
import InsightsPanel from "../components/insights/InsightsPanel";
import TransactionTable from "../components/transactions/TransactionTable";
import { useStore } from "../store/useStore";

const Dashboard = () => {
  const { transactions } = useStore();

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="ml-60 w-full">
        <Topbar />

        <div className="p-6 space-y-6 max-w-7xl mx-auto">

          {/* Summary Cards */}
          <SummaryCards transactions={transactions} />

          {/* Charts */}
          <div className="grid md:grid-cols-2 gap-6">
            <BalanceChart transactions={transactions} />
            <CategoryChart transactions={transactions} />
          </div>

          {/* Insights */}
          <InsightsPanel transactions={transactions} />

          {/* Transactions */}
          <TransactionTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;