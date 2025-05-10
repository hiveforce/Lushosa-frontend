function WhyChooseUs() {
  return (
    <div className="bg-primary-light-hover mt-[124px] lg:py-[130px] xl:px-[px] px-[30px] py-[50px]">
      <div className="text-center">
        <h1 className="text-[36px] font-normal text-secondary-custom">
          Why Choose Us?
        </h1>
        <p className="text-[20px] font-normal text-secondary-custom">
          Where quality meets service: your satisfaction guaranteed
        </p>
      </div>

      <div className="mt-[54px] flex gap-[60px] flex-wrap justify-center">
        <div className="bg-others-light-1 max-w-[370px] px-[44px] flex items-center justify-center flex-col rounded-[15px] shadow-2xl py-[50px] text-secondary-custom">
          <img src="/images/customer-service-icon.png" alt="" />
          <h2 className="font-bold text-[24px] text-center mt-6">
            Exceptional Customer Service
          </h2>
          <p className="text-center mt-[11px] text-[16px] font-medium">
            Our dedicated team is here to assist you every step of the way, from
            styling advice to post-purchase support.
          </p>
        </div>

        <div className="bg-secondary-custom text-others-light-1 max-w-[370px] px-[44px] flex items-center justify-center flex-col rounded-[15px] shadow-2xl py-[50px]">
          <img src="/images/champion-icon.png" alt="" />
          <h2 className="font-bold text-[24px] text-center mt-6">
            Quality Materials
          </h2>
          <p className="text-center mt-[11px] text-[16px] font-medium ">
            Our collections are crafted using only the finest material, ensuring
            both comfort and durability.
          </p>
        </div>

        <div className="bg-others-light-1 max-w-[370px] px-[44px] flex items-center justify-center flex-col rounded-[15px] shadow-2xl py-[50px]">
          <img src="/images/shield-icon.png" alt="" />
          <h2 className="font-bold text-[24px] text-center mt-6">
            Secure Shopping Experience
          </h2>
          <p className="text-center mt-[11px] text-[16px] font-medium ">
            Shop with peace of mind knowing your personal information and
            payments are fully protected.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
