function HairTypeCard({ card }: any) {
  return (
    <div className="relative ">
      <div className={`bg-${card.overlay} opacity-50 inset-0 absolute`}></div>
      <div className="w-full shrink-0">
        <img
          src={card.img}
          alt="img"
          className="w-full md:h-[482px] object-cover   shrink-0"
        />
      </div>
      <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 text-center ">
        <h1 className="font-semibold text-[28px]/[35px] text-others-light-1">
          {card.type}
        </h1>
        <p className="font-medium text-[12px]/[23px] mt-[6px] text-nowrap text-others-light-1">
          Check out the popular {card.type} Wigs
        </p>
        <button
          className={` bg-${card.btnColor} mt-4 inline-flex items-center border border-primary-header text-primary-header px-[16px] py-[13px] rounded-[25px] gap-[10px] font-semibold`}
        >
          Shop Straight
          <img src="/images/arrow-pink-icon.png" alt="" className="ml-2" />
        </button>
      </div>
    </div>
  );
}

export default HairTypeCard;
