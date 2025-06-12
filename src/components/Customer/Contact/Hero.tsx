function Hero() {
  return (
    <div className="px-5 py-[75px] flex flex-col gap-9 lg:gap-[82px] lg:flex-row lg:justify-between lg:items-center lg:px-[75px]">
      <div className="max-w-[509px] lg:w-full">
        <div className="text-center text-secondary-custom flex items-center min-[550px]:items-start min-[550px]:text-start   flex-col justify-center">
          <h1 className="text-[32px] font-bold lg:text-[36px]">
            Reach Out To Us!
          </h1>
          <p className="text-[16px] font-medium max-w-[289px]  min-[550px]:max-w-full lg:text-[20px]">
            Contact us and lets know how we can help you
          </p>
        </div>
        <div className="mt-6">
          <div className="bg-primary-header px-[22px] py-[17px] flex rounded-[12px] text-others-light-1 items-center gap-[21px] w">
            <div className="size-[36px]">
              <img src="/images/message-icon.png" alt="" />
            </div>
            <div>
              <p className="text-[18px] font-bold">Email</p>
              <p className="text-[16px] font-semibold">
                lushosahairs@gmail.com
              </p>
            </div>
          </div>
          <div className="bg-primary-header px-[22px] py-[17px] flex rounded-[12px] text-others-light-1 items-center gap-[21px] mt-[14px]">
            <div className="size-[36px]">
              <img src="/images/call-icon.png" alt="" />
            </div>
            <div>
              <p className="text-[18px] font-bold">Phone</p>
              <p className="text-[16px] font-semibold">+234 906 089 0293</p>
            </div>
          </div>
          <div className="bg-primary-header px-[22px] py-[17px] flex rounded-[12px] text-others-light-1 items-center gap-[21px] mt-[14px]">
            <div className="size-[36px]">
              <img src="/images/location-icon.png" alt="" />
            </div>
            <div>
              <p className="text-[18px] font-bold">Location</p>
              <p className="text-[16px] font-semibold">Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:max-w-[664px]">
        <img src="/images/contact-hero-img.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
