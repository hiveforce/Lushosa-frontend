function Hero() {
  return (
    <div className="bg-secondary-custom text-others-light-1 text-center px-5  pt-[75px]  pb-[119px] relative xl:pb-[237px] [@media(min-width:1000px)]:pb-[200px]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-bold text-[40px] lg:text-[60px]">About Us</h1>
        <p className="text-[16px] font-medium md:max-w-[600px] lg:max-w-[761px] lg:text-[20px]">
          Passionate About Empowering Confidence and Beauty Through
          High-Quality, Stylish Wigs – Your Trusted Partner in Every Step of
          Your Hair Journey
        </p>
      </div>

      <div className="flex items-center gap-1 lg:gap-3 absolute  left-1/2 transform -translate-x-1/2 -bottom-6 sm:-bottom-10  [@media(min-width:1280px)]:-bottom-28 [@media(min-width:1000px)]:-bottom-20">
        <div className="w-[113px] sm:w-[153px] h-[108px] sm:h-[140px]  xl:w-[290px] xl:h-[276px]   rounded-[6px] overflow-hidden relative [@media(min-width:1000px)]:w-[230px]  [@media(min-width:1000px)]:h-[230px]">
          <img
            src="/images/img-green.jpg"
            alt=""
            className="absolute -top-6 sm:-top-10 xl:-top-16"
          />
        </div>
        <div className=" w-[113px] sm:w-[153px] xl:w-[290px] min-[1000px]: rounded-[6px] overflow-hidden [@media(min-width:1000px)]:w-[230px]">
          <img src="/images/about-img1.png" alt="" />
        </div>
        <div className="w-[113px] sm:w-[153px] xl:w-[300px]  items-center  xl:h-[276px]  rounded-[6px] overflow-hidden  [@media(min-width:1000px)]:w-[230px] hidden [@media(min-width:352px)]:flex">
          <img src="/images/about-img2.png" alt="" className="" />
        </div>
        <div className="w-[153px] xl:w-[290px]  min rounded-[6px] overflow-hidden   hidden sm:block [@media(min-width:1000px)]:w-[230px]">
          <img src="/images/wigs-collection-img1.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
