import Button from "../../ui/Button";

function Hero() {
  return (
    <div className="lg:flex items-center lg:justify-between gap-[70px] pb-[75px] px-5 pt-[38px]  md:px-10 md:pt-[64px]  lg:px-[50px] lg:pt-[83px] ">
      <div className="flex items-stretch gap-6 lg:max-w-[500px] xl:max-w-[600px]">
        {/* Left: Thumbnails */}
        <div className="flex flex-col justify-between w-1/5 space-y-[11px]">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-1/3 border overflow-hidde">
              <img
                src={`/images/product-details-small-img.png`}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Right: Main Image */}
        <div className=" flex-1 overflow-hidden">
          <img
            src="/images/product-details-img.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="mt-[37px] lg:mt-0 lg:flex-1">
        <div className="border-b pb-[25px] lg:pb-[40px] border-secondary-light-active">
          <div className="flex items-center gap-[42px] md:justify-between">
            <h1 className="font-bold text-[20px] lg:text-[28px]">
              Malaysian Curly Bundle
            </h1>
            <button className=" bg-others-light-1   justify-center border rounded-full flex items-center size-[32px]">
              <img
                src="/images/heart-large-icon.png"
                alt="like-icon"
                className="size-[16px]"
              />
            </button>
          </div>
          <div className="flex items-center gap-2 text-secondary-custom mt-2 lg:mt-[21px]">
            <p className="font-normal text-[22px] lg:text-[28px]">$54.98 |</p>
            <div>
              <img src="/images/stars-icon.png" alt="" />
            </div>

            <p className="font-normal text-[14px] lg:text-[16px]">
              ( 32 review )
            </p>
          </div>
        </div>

        <div className="mt-[33px]">
          <div>
            <div className="flex gap-[15px] max-w-[497px]">
              <div className="flex items-center gap-[27px] px-[13px]  rounded-[104px] border border-secondary-light-active w-fit">
                <button className="text-secondary-light-active text-[20px]">
                  -
                </button>
                <p className="font-bold text-[18px]">1</p>
                <button className="text-secondary-light-active text-[17px]">
                  +
                </button>
              </div>
              <button className="bg-secondary-custom text-others-light-1 py-[13px]  rounded-[104px] w-full">
                Add to Cart
              </button>
            </div>
            <div className="flex mt-[15px] gap-2 max-w-[497px]">
              <Button
                type="secondary"
                className="py-3 font-semibold text-[16px] rounded-[30px] "
              >
                Join Savings Plan
              </Button>
              <Button
                type="primary"
                className="rounded-[30px] font-semibold text-[16px] flex-1"
              >
                Buy Now
              </Button>
            </div>

            <div className="text-[14px] font-normal text-secondary-custom mt-10">
              <div className="flex gap-5">
                <img
                  src="/images/shipping-icon.png"
                  alt=""
                  className="size-[26px]"
                />
                <p>Free shipping on all orders over $100</p>
              </div>
              <div className="flex gap-5 items-center mt-4">
                <div>
                  <img
                    src="/images/delivery-icon.png"
                    alt=""
                    className="size-[26px]"
                  />
                </div>
                <p className="text-[13px]">
                  Delivers in: Only on weekends Shipping & Return
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
