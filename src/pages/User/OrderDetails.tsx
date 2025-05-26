import OrderedProducts from "../../components/User/OrderDetails/OrderedProducts";
import OrderTimeline from "../../components/User/OrderDetails/OrderTimeline";

function OrderDetails() {
  return (
    <div className="px-5 pb-[36px] w-full sm:px-10 sm:pb-[75px] sm:pt-[30px] ">
      <div className="sm:border sm:p-6 rounded">
        <div className="bg-others-light-active-yellow border border-others-normal-yellow rounded-[6px] p-6 space-y-5 w-full sm:flex sm:items-center sm:justify-between sm:space-y-0">
          <div className="">
            <p className="font-normal text-[20px]">#964597612</p>
            <div className="text-secondary-light-active text-[14px] font-normal sm:flex sm:gap-5 sm:mt-2">
              <p className="my-2 sm:my-0">4 Products</p>
              <p>Order Placed in 17 Jan, 2021 at 7:32 PM</p>
            </div>
          </div>
          <p className="text-primary-custom font-semibold text-[28px]">
            $1199.00
          </p>
        </div>

        <OrderTimeline />
      </div>

      <OrderedProducts />
    </div>
  );
}

export default OrderDetails;
