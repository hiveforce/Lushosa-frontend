import { Link, useLocation } from "react-router-dom";
import OrderCard from "./OrderCard";

function OrderHistory() {
  const { pathname } = useLocation();
  // console.log(pathname);
  const isOrderHistory = pathname.includes("order-history");
  return (
    <div className="lg:border rounded-[16px] lg:w-full lg:mb-[130px] mb-[75px] ">
      <div className="lg:flex justify-between items-center pr-6 w-full  ">
        <h1
          className={`py-5 px-6 text-[20px] font-medium lg:inline-flex ${
            isOrderHistory ? "inline-flex" : "hidden"
          }`}
        >
          Order History
        </h1>
        {!isOrderHistory && (
          <Link
            to="/user/order-history"
            className="font-semibold text-[16px] bg-transparent text-primary-custom hidden lg:inline-flex"
          >
            View All
          </Link>
        )}
      </div>

      <div className="border-y py-[10px] px-6 lg:flex hidden justify-between  pr-20 text-secondary-light-active w-full  text-start">
        <p>ORDER ID</p>
        <p>STATUS</p>
        <p>DATE </p>
        <p>TOTAL</p>

        <p>ACTIONS</p>
      </div>

      <div className="w-full">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  );
}

export default OrderHistory;
