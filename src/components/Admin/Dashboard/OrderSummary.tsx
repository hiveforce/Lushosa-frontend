import Orders from "../Orders/Orders";

function OrderSummary() {
  return (
    <div className="mt-7">
      <div className="bg-others-light-1 rounded-t-[14px] px-5 py-5 border  flex justify-between">
        <p>Recent Orders</p>
        <p className="flex items-center gap-2 text-[14px] font-normal text-primary-custom">
          View All Orders
          <span>
            <img
              src="/images/arrow-pink-icon.png"
              alt=""
              className=" rotate-45"
            />
          </span>
        </p>
      </div>
      <Orders />
    </div>
  );
}

export default OrderSummary;
