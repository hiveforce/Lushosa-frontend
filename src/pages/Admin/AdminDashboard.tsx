import OrderSummary from "../../components/Admin/Dashboard/OrderSummary";
import OverviewAnalytics from "../../components/Admin/Dashboard/OverviewAnalytics";
import SalesProgress from "../../components/Admin/Dashboard/SalesProgress";

function AdminDashboard() {
  return (
    <div className="pl-5  py-8 md:pl-10 lg:pl-[18px]">
      <OverviewAnalytics />
      <SalesProgress />
      <OrderSummary />
    </div>
  );
}

export default AdminDashboard;
