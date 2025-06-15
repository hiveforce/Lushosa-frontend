function OverviewAnalytics() {
  return (
    <div className="md:pr-10 pr-2">
      <div className="flex justify-between items-center  flex-wrap">
        <div>
          <h1 className="font-bold text-[24px]">Overview & Analytics</h1>
          <p className="text-[#5c5c5c] text-[14px] font-normal">
            Welcome back, Sarah! Here's what's happening today.
          </p>
        </div>
        <button className="py-3 px-4 bg-primary-custom text-others-light-1 rounded-[8px] mt-6 md:mt-0">
          + Add Product
        </button>
      </div>

      <div className="mt-8 space-y-[12px]  md:grid md:grid-cols-2 md:gap-3 md:space-y-0 lg:grid-cols-4 ">
        <div className="bg-white p-[21px] rounded-[8px]">
          <div className="flex justify-between items-center">
            <p className="text-[14px] font-medium">Total Sales</p>
            <img src="/images/sales-icon.png" alt="sales-icon" />
          </div>
          <div className="mt-[21px]">
            <h1 className="text-[24px] font-bold">
              $24,589{" "}
              <span className="text-[14px] font-medium text-others-normal-green">
                +12.5%
              </span>
            </h1>
            <p className="text-[#777777] text-[12px] font-normal mt-1">
              Compared to last month
            </p>
          </div>
        </div>

        <div className="bg-white p-[21px] rounded-[8px]">
          <div className="flex justify-between items-center">
            <p className="text-[14px] font-medium">New Orders</p>
            <img src="/images/cart-pink-icon.png" alt="sales-icon" />
          </div>
          <div className="mt-[21px]">
            <h1 className="text-[24px] font-bold">
              128
              <span className="text-[14px] font-medium text-others-normal-green">
                +8.2%
              </span>
            </h1>
            <p className="text-[#777777] text-[12px] font-normal mt-1">
              Last 7 days
            </p>
          </div>
        </div>

        <div className="bg-white p-[21px] rounded-[8px]">
          <div className="flex justify-between items-center">
            <p className="text-[14px] font-medium">Low Stock Items</p>
            <img src="/images/warning-icon.png" alt="sales-icon" />
          </div>
          <div className="mt-[21px]">
            <h1 className="text-[24px] font-bold">
              12
              <span className="text-[14px] font-medium text-others-normal-green">
                +3
              </span>
            </h1>
            <p className="text-[#777777] text-[12px] font-normal mt-1">
              Items need restock
            </p>
          </div>
        </div>

        <div className="bg-white p-[21px] rounded-[8px]">
          <div className="flex justify-between items-center">
            <p className="text-[14px] font-medium">Customer Growth</p>
            <img src="/images/profile-growth-icon.png" alt="sales-icon" />
          </div>
          <div className="mt-[21px]">
            <h1 className="text-[24px] font-bold">
              +45
              <span className="text-[14px] font-medium text-others-normal-green">
                +5.3%
              </span>
            </h1>
            <p className="text-[#777777] text-[12px] font-normal mt-1">
              New customers this month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewAnalytics;
