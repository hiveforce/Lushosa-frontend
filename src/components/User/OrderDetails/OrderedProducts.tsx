import OrderCard from "./OrderCard";

function OrderedProducts() {
  return (
    <div className="md:border rounded-b-[16px] lg:flex-1 mt-10 sm:mt-0">
      <h1 className="py-5 px-6 text-[20px] font-medium hidden lg:block">
        Products (02)
      </h1>

      <div className="bg-primary-header py-[10px] px-6 lg:flex hidden justify-between">
        <div className="flex-1">PRODUCTS</div>
        <div className="flex justify-between flex-1">
          <p>PRICE</p>
          <p>QUANTITY</p>
          <p>SUB-TOTAL</p>
        </div>
      </div>

      <div>
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  );
}

export default OrderedProducts;
