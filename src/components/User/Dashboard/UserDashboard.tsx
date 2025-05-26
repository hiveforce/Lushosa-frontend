import Button from "../../../ui/Button";
import OrderHistory from "../OrderHistory/OrderHistory";

function UserDashboard() {
  return (
    <div>
      <div className="px-5 pb-[75px]">
        <div>
          <h1 className="font-semibold text-[24px]">Hello, Kevin</h1>
          <p className="font-medium text-[16px] mt-4 max-w-[690px]">
            From your account dashboard. you can easily check & view your Recent
            Orders, manage your Shipping and Billing Addresses and edit your
            Password and Account Details.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-6">
          <div className="border border-secondary-light-hover rounded  ">
            <h1 className="text-[16px] font-semibold py-4 pl-6">
              Account Info
            </h1>
            <div className="py-[22px] pl-6 border-t border-secondary-light-hover">
              <div className="flex gap-4 items-center">
                <img src="/images/avatar-icon.png" alt="" />
                <div>
                  <p className="text-[16px] font-semibold">Kevin Gilbert</p>
                  <p className="font-normal text-[14px]">
                    Dhaka - 1207, Bangladesh
                  </p>
                </div>
              </div>
              <div className="my-4">
                <p className="font-normal text-[14px] text-secondary-light-active">
                  <span className="text-secondary-custom">Email:</span>
                  kevin.gilbert@gmail.com
                </p>
                <p className="font-normal text-[14px] text-secondary-light-active">
                  <span className="text-secondary-custom">Phone:</span>
                  +1-202-555-0118
                </p>
              </div>
              <Button
                type="secondary"
                className="m py-3 text-[16px] font-semibold rounded-[30px]"
              >
                Edit Account
              </Button>
            </div>
          </div>

          <div className="border border-secondary-light-hover rounded pr-6">
            <h1 className="text-[16px] font-semibold py-4 pl-6">
              Billing address
            </h1>
            <div className="py-[22px] pl-6 border-t border-secondary-light-hover">
              <div className="flex gap-4 items-center">
                <div>
                  <p className="text-[16px] font-semibold">Kevin Gilbert</p>
                  <p className="font-normal text-[14px] mt-2 text-secondary-light-active">
                    East Tejturi Bazar, Word No. 04, Road No. 13/x, House no.
                    1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh
                  </p>
                </div>
              </div>
              <div className="mt-2 mb-[22px]">
                <p className="font-normal text-[14px] text-secondary-light-active">
                  <span className="text-secondary-custom">Phone:</span>
                  +1-202-555-0118
                </p>
                <p className="font-normal text-[14px] text-secondary-light-active">
                  <span className="text-secondary-custom">Email:</span>
                  kevin.gilbert@gmail.com
                </p>
              </div>
              <Button
                type="secondary"
                className="m py-3 text-[16px] font-semibold rounded-[30px]"
              >
                Edit Address
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-6 sm:grid sm:grid-cols-3 lg:grid-cols-1  sm:items-center sm:justify-  sm:col-span-2 lg:col-auto sm:mt-3">
            <div className="bg-[#F7D4E4B0] py-[18px] px-4 flex items-center rounded max-w-[228px] gap-4 sm:max-w-full ">
              <div>
                <img src="/images/total-order-icon.png" alt="icon" />
              </div>
              <div>
                <p className="font-semibold text-[20px]">154</p>
                <p className="font-normal text-[14px] text-secondary-light-active">
                  Total Orders
                </p>
              </div>
            </div>

            <div className="bg-others-light-active-yellow py-[18px] px-4 flex items-center rounded max-w-[228px] gap-4  sm:max-w-full ">
              <div>
                <img src="/images/pending-order-icon.png" alt="icon" />
              </div>
              <div>
                <p className="font-semibold text-[20px]">05</p>
                <p className="font-normal text-[14px] text-secondary-light-active">
                  Pending Orders
                </p>
              </div>
            </div>

            <div className="bg-others-light-2 py-[18px] px-4 flex items-center rounded max-w-[228px] gap-4  sm:max-w-full ">
              <div>
                <img src="/images/complete-order-icon.png" alt="icon" />
              </div>
              <div>
                <p className="font-semibold text-[20px]">149</p>
                <p className="font-normal text-[14px] text-secondary-light-active">
                  Completed Orders
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OrderHistory />
    </div>
  );
}

export default UserDashboard;
