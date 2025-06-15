import OrderAdmin from "./OrderAdmin";

function Orders() {
  return (
    <div className="bg-others-light-1 overflow-x-auto rounded-b-[14px] border border-[#E4E4E4]">
      <div className="min-w-max lg:min-w-0">
        <div className="grid grid-flow-col auto-cols-max gap-3 pl-5">
          <p className="py-3 text-[12px] font-bold text-[#5c5c5c] min-w-[100px]">
            ORDER ID
          </p>
          <p className="py-3 text-[12px] font-bold text-[#5c5c5c] min-w-[200px]">
            CUSTOMER
          </p>
          <p className="py-3 text-[12px] font-bold text-[#5c5c5c] min-w-[180px] ml-5">
            PRODUCT
          </p>
          <p className="py-3 text-[12px] font-bold text-[#5c5c5c] min-w-[100px] ml-3">
            DATE
          </p>
          <p className="py-3 text-[12px] font-bold text-[#5c5c5c] min-w-[80px]">
            AMOUNT
          </p>
          <p className="py-3 text-[12px] font-bold text-[#5c5c5c] min-w-[90px]">
            STATUS
          </p>
          <p className="py-3 text-[12px] font-bold text-[#5c5c5c] min-w0px]">
            PAYMENT
          </p>
        </div>

        {/* Content */}
        <div className="w-full">
          <OrderAdmin />
          <OrderAdmin />
          <OrderAdmin />
          <OrderAdmin />
          <OrderAdmin />
        </div>
      </div>
    </div>
  );
}

export default Orders;
