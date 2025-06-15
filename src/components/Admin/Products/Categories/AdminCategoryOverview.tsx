import AdminCategory from "./AdminCategory";

function AdminCategoryOverview() {
  return (
    <div className="bg-others-light-1 overflow-x-auto rounded-[14px] border border-[#E4E4E4] mt-4 mr-5">
      <div className="min-w-max lg:min-w-0">
        <div className="grid grid-flow-col auto-cols-max gap-3 pl-5">
          <p className="py-3 text-[12px] font-bold text-[#5c5c5c] min-w-[250px]">
            CATEGORY
          </p>
          <p className="py-3 text-[12px] font-bold text-[#5c5c5c] min-w-[300px]">
            DESCRIPTION
          </p>
          <p className="py-3 text-[12px] font-bold text-[#5c5c5c] min-w-[90px] ml-5">
            PRODUCTS
          </p>
          <p className="py-3 text-[12px] font-bold text-[#5c5c5c] min-w-[100px] ml-3">
            STATUS
          </p>
          <p className="py-3 text-[12px] font-bold text-[#5c5c5c] min-w-[80px]">
            ACTIONS
          </p>
        </div>

        {/* Content */}
        <div className="w-full">
          <AdminCategory />
          <AdminCategory />
          <AdminCategory />
          <AdminCategory />
          <AdminCategory />
        </div>
      </div>
    </div>
  );
}

export default AdminCategoryOverview;
