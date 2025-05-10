import { Link } from "react-router-dom";

function ProductCard() {
  return (
    <div className="relative border border-primary-custom rounded-[28.4px] w-full max-w-[364px] mx-auto shrink-0">
      <div>
        <img
          src="/images/product-img.jpg"
          alt=""
          className="rounded-t-[28.4px]"
        />
      </div>
      <div className="pl-[19px] pr-[13px] py-[15px]">
        <h1 className="font-semibold text-[17px] mb-1">
          Malaysian Curly Bundle
        </h1>
        <p className="font-normal text-[13px]/[19px] text-secondary-custom">
          Soft and manageable Malaysian curly hair bundle, tangle-free.
        </p>
        <p className=" font-bold text-[17.1px]/[27px] mt-2">$159.99</p>
        <div className="flex gap-3 mt-3 justify-around">
          <button className="bg-primary-custom py-[9px] px-[11px] text-[14px] text-others-light-1 flex rounded-[28px] items-center gap-3 sm:gap-1 md:text-nowrap w-full justify-center">
            <img src="/images/cart-white-icon.png" alt="cart-icon" /> Add to
            Cart
          </button>
          <Link
            to="/products/:id"
            className=" py-[9px] px-[15px] border  border-primary text-center rounded-[28px] items-center  text-[14px] md:text-nowrap w-full justofy-center"
          >
            View Details
          </Link>
        </div>
      </div>

      <button className="absolute bg-others-light-1 top-4 right-5 p-[11px] border rounded-full flex items-center">
        <img
          src="/images/heart-large-icon.png"
          alt="like-icon"
          className="size-[22.8px]"
        />
      </button>
    </div>
  );
}

export default ProductCard;
