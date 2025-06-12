function CartCard() {
  return (
    <div className="border-y px-5 pt-[31px] shadow-[0_4px_6px_-2px_rgba(0,0,0,0.25)] lg:flex lg:justify-between lg:items-center md:shadow-none lg:border-b-0">
      <div className="flex gap-4 items-center pb-7 border-b lg:border-none lg:flex-1">
        <div className="hidden lg:block">
          <img src="/images/cart-remove-icon.png" alt="" />
        </div>
        <div className=" max-w-[66px] lg:max-w-[72px]">
          <img src="/images/wigs-collection-img2.png" alt="" className="" />
        </div>
        <div className="text-secondary-custom">
          <h1 className="font-medium text-[20px] lg:text-[16px]">
            Malaysian Curly Bundle
          </h1>
          <p className="text-[19px] font-semibold lg:hidden">$2,300.00</p>
        </div>
      </div>
      <div className="mt-[13px] pb-[11px] flex justify-between items-center lg:hidden ">
        <button className="text-others-normal-red text-[18px] font-semibold flex-1 text-start">
          Remove
        </button>
        <div className="bg-primary-custom rounded-[32px] text-others-light-1 flex-1 flex justify-around items-center px- text-[20px] font-semibold max-w-[182px] py-1">
          <button className="inline-block ">-</button>
          <span className="inline-block mx-2">01</span>
          <button className="inline-block">+</button>
        </div>
      </div>

      <div className="hidden lg:flex pb-7 flex-1 justify-between">
        <p>$70</p>
        <div className=" rounded-[32px] text-secondary-light-active flex-1 flex justify-around items-center px- text-[20px] font-normal max-w-[182px] py-1">
          <button className="inline-block ">-</button>
          <span className="inline-block mx-2 text-secondary-custom">01</span>
          <button className="inline-block">+</button>
        </div>
        <p className="text-start">$70</p>
      </div>
    </div>
  );
}

export default CartCard;
