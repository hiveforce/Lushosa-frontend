import Button from "../../../ui/Button";

function WigsCollection() {
  return (
    <div className="bg-others-light-1 pt-[75px] pb-[93px] px-5 lg:px-[104px] lg:gap-[45px] flex flex-col items-center lg:flex-row l lg:justify-between">
      <div className="text-secondary-custom mx-auto flex flex-col items-start justify-center max-w-2xl lg:mx-0 lg:relative">
        <div className=" mx-auto">
          <p className="font-bold text-[24px] text-start">
            Some amazing <br />
            wigs collection
          </p>
          <p className="text-[16px] font-medium mt-4 mb-8 text-start">
            Natural wigs made from 100% human hair.
          </p>
        </div>
        <div className="w-full ">
          <img
            src="/images/wigs-collection-img1.png"
            alt="Wigs collection"
            className="block mx-auto"
          />
        </div>
        <p className="font-medium text-[16px] mt-5 text-start max-w-[353px] lg:max-w-[569px]  lg:absolute lg:-bottom-24 lg:w-[450px] z-20">
          With years of experience, we offer a wide range of styles to help you
          find your perfect look.
        </p>
      </div>
      <div className="mt-6 relative">
        <img
          src="/images/wigs-collection-img2.png"
          alt=""
          className="max-h-[545px]"
        />
        <div className="bg-others-light-1 p-[18px] absolute -bottom-8 -left-8 rounded-[35px] lg:h-[130px]">
          <Button className="py-2 px-3">Shop Now</Button>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="relative size-[152px] mx-auto">
          {/* 1. The rotating wrapper */}
          <div className="absolute inset-0 animate-spin-slow">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* 2. Define a circle path */}
              <defs>
                <path
                  id="circlePath"
                  d="
                M 100, 100
                m -75, 0
                a 75,75 0 1,1 150,0
                a 75,75 0 1,1 -150,0
              "
                />
              </defs>

              {/* 3. Place the text on that path */}
              <text fontSize="14" fill="#333" letterSpacing="2">
                <textPath href="#circlePath" startOffset="0">
                  Brand Fashion • Brand Fashion • Brand Fashion • Brand Fashion
                </textPath>
              </text>
            </svg>
          </div>

          {/* 4. Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="size-[13px] bg-black rounded-full" />
          </div>
        </div>

        <div className="mt-[52px]">
          <img src="/images/wigs-collection-img3.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default WigsCollection;
