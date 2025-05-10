import ButtonPrimary from "../../ui/Button";

function Hero() {
  return (
    <div className="bg-secondary-custom px-[21px] py-[75px] sm:px-[35px] lg:px-[67px] md:flex justify-between md:items-center md:gap-10">
      <div className="max-w-[470px] md:shrin">
        <h1 className="text-others-light-1 font-bold text-[40px]">
          100-Day Savings Plan for Your Dream Wig
        </h1>
        <p className="text-[16px] font-medium text-others-light-1 mt-3">
          Can't afford your dream hair bundle right now? Our 100-day savings
          plan allows you to make small installment payments until you reach
          your goal.
        </p>
        <div className="mt-6 space-y-4 md:flex md:items-center md:space-y-0 md:gap-3">
          <ButtonPrimary type="primary">Create Savings Account</ButtonPrimary>
          <ButtonPrimary type="secondary">
            Sign In to Savings Plan
          </ButtonPrimary>
        </div>
      </div>

      <div className="mt-8 md:shrink-">
        <img src="/images/hero-saving-plan-img.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
