import Button from "../../ui/Button";

function CartSummary() {
  return (
    <div className="border border-secondary-light-active mt-8 px-5 py-4 mx-5 rounded-[14px] max-w-[670px] [@media(min-width:650px)]:mx-auto lg:mx-0 lg:mt-0 lg:h-fit lg:flex-1 lg:max-w-[294px]">
      <h1 className="text-[16px] font-medium">Cart Totals</h1>
      <div className="mt-4 space-y-[10px] border-b pb-4 border-b-secondary-light-active">
        <div className="flex items-center justify-between">
          <p className="text-[16px] font-normal text-secondary-light-active">
            Sub-total
          </p>
          <p className="text-[16px] font-medium text-secondary-custom">$320</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[16px] font-normal text-secondary-light-active">
            Shipping
          </p>
          <p className="text-[16px] font-medium text-secondary-custom">Free</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[16px] font-normal text-secondary-light-active">
            Discount
          </p>
          <p className="text-[16px] font-medium text-secondary-custom">$24</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[16px] font-normal text-secondary-light-active">
            Tax
          </p>
          <p className="text-[16px] font-medium text-secondary-custom">
            $61.99
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-[13px] mb-5">
        <p className="text-[16px] font-normal text-secondary-light-active">
          Total
        </p>
        <p className="text-[16px] font-semibold text-secondary-custom">
          $357.99 USD
        </p>
      </div>

      <Button type="others" className="w-full py-2 rounded-[24px]">
        Proceed to Check-out
      </Button>
    </div>
  );
}

export default CartSummary;
