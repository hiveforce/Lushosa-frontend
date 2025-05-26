function WishlistCard() {
  return (
    <div className="border-y px-5 pt-[31px] shadow-[0_4px_6px_-2px_rgba(0,0,0,0.25)] lg:flex lg:justify-between lg:items-center md:shadow-none lg:border-b-0 rounded-t-[7px]">
      <div className="flex gap-4 items-center pb-7 border-b lg:border-none lg:flex-1">
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
        <button className="bg-primary-custom py-[9px] px-[11px] text-[14px] text-others-light-1 flex rounded-[28px] max-w-[182px] items-center gap-3 sm:gap-1 md:text-nowrap w-full justify-center">
          <img src="/images/cart-white-icon.png" alt="cart-icon" /> Add to Cart
        </button>
      </div>

      <div className="hidden lg:flex pb-7 flex-1 justify-between xl:pr-10 gap-1">
        <p>$70</p>
        <p className="text-start text-[16px] text-others-normal-green font-semibold">
          IN STOCK
        </p>
        <button className="bg-primary-custom py-[9px] px-[11px] max-w-[182px]  text-[14px] text-others-light-1 flex rounded-[28px] items-center gap-3 sm:gap-1 md:text-nowrap w-full justify-center">
          <img src="/images/cart-white-icon.png" alt="cart-icon" /> Add to Cart
        </button>
        <div className="hidden lg:block ">
          <img src="/images/cart-remove-icon.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default WishlistCard;
