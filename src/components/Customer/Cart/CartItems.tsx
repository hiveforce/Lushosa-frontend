import CartCard from "./CartCard";

function CartItems() {
  return (
    <div className="md:border rounded-[16px] lg:flex-1">
      <h1 className="py-5 px-6 text-[20px] font-medium hidden lg:block">
        Shopping Cart
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
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
      </div>
    </div>
  );
}

export default CartItems;
