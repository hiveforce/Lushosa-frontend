import Logo from "./Logo";
import AdminNavLinks from "./AdminNavLinks";

function AdminSidebar() {
  return (
    <aside className="hidden lg:block w-[250px] bg-primary-dark-1 h-screen">
      <div className="bg-primary-header flex items-center justify-center py-[10px]">
        <Logo />
      </div>
      <div className="bg-secondary-custom py-8 px-2 h-full">
        <AdminNavLinks />
      </div>
    </aside>
  );
}

export default AdminSidebar;
