import Customer from "./Customer";

function CustomersOverview() {
  return (
    <div className="bg-others-light-1 overflow-x-auto rounded-[14px] border border-[#E4E4E4] mt-4 mr-5">
      <div className="min-w-max lg:min-w-0">
        <div className="grid grid-flow-col gap-3 pl-5">
          <p className="py-3 text-[12px] font-bold text-[#5c5c5c] min-w-[150px]">
            CUSTOMER ID
          </p>
          <p className="py-3 text-[12px] font-bold text-[#5c5c5c] min-w-[200px]">
            NAME
          </p>
          <p className="py-3 text-[12px] font-bold text-[#5c5c5c] min-w-[180px] ">
            EMAIL
          </p>
          <p className="py-3 text-[12px] font-bold text-[#5c5c5c] min-w-[180px] ">
            DATE REGISTERED
          </p>
          <p className="py-3 text-[12px] font-bold text-[#5c5c5c] min-w-[100px]">
            ACTIONS
          </p>
        </div>

        {/* Content */}
        <div className="w-full">
          <Customer />
          <Customer />
          <Customer />
          <Customer />
          <Customer />
        </div>
      </div>
    </div>
  );
}

export default CustomersOverview;
