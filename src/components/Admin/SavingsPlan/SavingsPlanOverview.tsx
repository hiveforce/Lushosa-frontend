import SavingPlan from "./SavingPlan";

function SavingsPlanOverview() {
  return (
    <div className="bg-others-light-1 overflow-x-auto rounded-[14px] border border-[#E4E4E4] mt-4 mr-5">
      <div className="min-w-max lg:min-w-0">
        <div className="grid grid-flow-col auto-cols-max gap-3 pl-5">
          <p className="py-3 text-[12px] font-bold text-[#5c5c5c] min-w-[100px]">
            SAVINGS ID
          </p>
          <p className="py-3 text-[12px] font-bold text-[#5c5c5c] min-w-[200px]">
            CUSTOMER
          </p>
          <p className="py-3 text-[12px] font-bold text-[#5c5c5c] min-w-[180px] ml-5">
            PRODUCT
          </p>
          <p className="py-3 text-[12px] font-bold text-[#5c5c5c] min-w-[60px] ml-3">
            DAYS
          </p>
          <p className="py-3 text-[12px] font-bold text-[#5c5c5c] min-w-[80px]">
            TOTAL AMOUNT
          </p>
          <p className="py-3 text-[12px] font-bold text-[#5c5c5c] min-w-[90px]">
            AMOUNT PAID
          </p>
          <p className="py-3 text-[12px] font-bold text-[#5c5c5c] min-w0px]">
            LAST PAYMENT
          </p>
        </div>

        {/* Content */}
        <div className="w-full">
          <SavingPlan />
          <SavingPlan />
          <SavingPlan />
          <SavingPlan />
          <SavingPlan />
        </div>
      </div>
    </div>
  );
}

export default SavingsPlanOverview;
