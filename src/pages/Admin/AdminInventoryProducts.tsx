import AdminInventoryOverview from "../../components/Admin/Products/Inventory/AdminInventoryOverview";
import SearchFilterSort from "../../ui/SearchFilterSort";

function AdminInventoryProducts() {
  return (
    <div className="pl-5  py-8 md:pl-10 lg:pl-[18px]">
      <div className="flex justify-between items-center  flex-wrap mr-5">
        <div>
          <h1 className="font-bold text-[24px]">Inventory Management</h1>
          <p className="text-[#5c5c5c] text-[14px] font-normal">
            Organize and manage your wig product inventories
          </p>
        </div>

        <div>
          <button className="py-[9px] px-3 bg-primary-custom text-others-light-1 rounded-[8px] mt-6 md:mt-0 mr-2 text-[14px] font-medium">
            +Add Inventory
          </button>
          <button className="py-3 px-4 text-[14px] font-medium bg-others-light-1 rounded-[8px] mt-6 md:mt-0">
            Publish
          </button>
        </div>
      </div>

      <SearchFilterSort />
      <AdminInventoryOverview />
    </div>
  );
}

export default AdminInventoryProducts;
