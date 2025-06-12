function Mission() {
  return (
    <div className="pt-[75px]  bg-others-light-1 px-5 sm:px-10 md:pt-[120px] lg:pt-[160px] md:px-14 lg:px-[110px] ">
      <div>
        <h1 className="font-bold text-[24px] max-w-[500px] lg:max-w-[600px] lg:text-[33px]">
          Our Mission: Celebrating Confidence and Beauty in Every Strand
        </h1>
        <div className="text-secondary-custom md:flex md:mt-5 md:gap-[58px] md:items-center font-normal text-[16px]">
          <p className="md:mt-0 mt-6">
            At Lushosa Hair, we believe every wig is an opportunity to express
            your unique style and boost your confidence. Since day one, our goal
            has been to offer high-quality, comfortable, and stylish wigs that
            help you look and feel your best. We’re passionate about empowering
            you to embrace your individuality and explore new looks with ease,
            providing a diverse selection and a welcoming experience every step
            of the way.
          </p>
          <p className="md:mt-0 mt-6">
            We’re dedicated to providing excellent customer service and a
            thoughtfully curated wide selection of wigs, ensuring that no matter
            your style preference or need, you can easily find the perfect wig
            to complement your unique journey and enhance your confidence every
            step of the way.
          </p>
        </div>
      </div>

      <div className="mt-[75px] flex flex-col justify md:flex-row md:gap-5 xl:gap-[72px] items-center">
        <div className="relative mx-auto  md:h-fit  flex items-center justify-center w-fit">
          <img src="/images/about-img3.png" alt="" />
          <div className="bg-primary-header absolute -bottom-12 py-[11px] px-[33px] max-w-[293px] sm:max-w-[400px] w-full rounded-[10px] text-center left-1/2 transform -translate-x-1/2">
            <h1 className="text-[16px] font-medium text-secondary-custom">
              “A great wig is the start of a confident you”
            </h1>
            <p className="text-[14px] text-secondary-light-active font-normal mt-1">
              Lushosa Hair Founder
            </p>
          </div>
        </div>
        <div className="mt-[69px] md:max-w-[257px] lg:max-w-[397px] xl:max-w-[500px] md:shrink-0">
          <h1 className="text-[24px] font-bold ">
            Empowering You to Shine with Confidence and Style
          </h1>
          <p className="mt-6 text-[16px] font-normal">
            At Lushosa Hair, we believe that beauty starts with confidence. Our
            mission is to provide wigs that not only enhance your look but also
            inspire you to embrace your true self. Whether you’re exploring new
            styles or reclaiming your natural beauty, we’re here to support your
            journey with quality products and heartfelt care.
          </p>
          <p className="mt-5 text-[16px] font-normal">
            Together, we celebrate individuality and the power of
            self-expression.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mission;
