import AdminProduct from "./AdminProduct";

function AdminProductOverview() {
  return (
    <div className="bg-others-light-1 overflow-x-auto rounded-[14px] border border-[#E4E4E4] mt-4 mr-5">
      <div className="min-w-max lg:min-w-0">
        <div className="grid grid-flow-col auto-cols-max gap-3 pl-5">
          <p className="py-3 text-[12px] font-bold text-[#5c5c5c] min-w-[250px]">
            PRODUCT
          </p>
          <p className="py-3 text-[12px] font-bold text-[#5c5c5c] min-w-[100px]">
            SKU
          </p>
          <p className="py-3 text-[12px] font-bold text-[#5c5c5c] min-w-[120px] ml-5">
            CATEGORY
          </p>
          <p className="py-3 text-[12px] font-bold text-[#5c5c5c] min-w-[80px] ml-3">
            PRICE
          </p>
          <p className="py-3 text-[12px] font-bold text-[#5c5c5c] min-w-[80px]">
            STOCK
          </p>
          <p className="py-3 text-[12px] font-bold text-[#5c5c5c] min-w-[100px]">
            STATUS
          </p>
          <p className="py-3 text-[12px] font-bold text-[#5c5c5c] min-w0px]">
            ACTIONS
          </p>
        </div>

        {/* Content */}
        <div className="w-full">
          <AdminProduct />
          <AdminProduct />
          <AdminProduct />
          <AdminProduct />
          <AdminProduct />
        </div>
      </div>
    </div>
  );
}

export default AdminProductOverview;
