import ButtonPrimary from "../../../ui/Button";

function Hero() {
  return (
    <div className=" bg-secondary-custom px-4 lg:pl-[10px] lg:pr-[58px] pt-[70px] lg:pt-[0px] flex flex-col items-center justify-center md:flex-row-reverse lg:justify-between ">
      <div className="flex flex-col items-center max-w-[774px] shrink-0 lg:justify-self-center lg:mt-16">
        <div className="text-primary-custom text-center">
          <h1 className="font-semibold text-[20px] lg:text-[28px]">
            UNBEATABLE PRICES
          </h1>
          <p className="font-semibold text-[12px] lg:text-[20px]">
            ON PREMUIM WIGS
          </p>
        </div>
        <p className="text-others-light-1 text-center font-bold text-[40px] mt-3 lg:text-[60px]">
          Premium Quality <br />
          Hair Bundles
        </p>
        <p className="text-others-light-1 font-normal text-[12px] text-center mt-[9px] max-w-[374px]">
          Discover our collection of luxurious hair bundles that will transform
          your look and boost your confidence.
        </p>
        <ButtonPrimary className="mt-[14px]">Shop Now</ButtonPrimary>
      </div>
      <div className="mt-[58px] ">
        <img src="/images/hero-img.png" alt="" className="lg:hidden" />
        <img
          src="/images/hero-img-desktop.png"
          alt=""
          className="hidden lg:inline-flex"
        />
      </div>
    </div>
  );
}

export default Hero;
