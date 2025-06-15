import { Outlet } from "react-router-dom";
import AdminNav from "../../ui/AdminNav";
import AdminSidebar from "../../ui/AdminSidebar";

function AdminLayout() {
  return (
    <div className="bg-primary-light lg:flex h-screen lg:overflow-hidden">
      <AdminSidebar />
      <div className="flex flex-col h-full flex-1 overflow-hidden">
        <AdminNav />
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
