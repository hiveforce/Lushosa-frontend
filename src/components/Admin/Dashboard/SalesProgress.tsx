function SalesProgress() {
  return (
    <div className="mt-[28px] space-y-[28px] lg:flex lg:space-y-0">
      <div className="bg-others-light-1 pt-[21px] pb-[19px] overflow-x-auto rounded-[14px] md:mr-10">
        <div className="px-[38px] min-w-max md:min-w-0">
          <p className="text-[20px] font-bold mb-[11px]">Sales Performance</p>
          <div className="w-full lg:max-w-[580px]">
            <img
              src="/images/sales-bar-chart-icon.png"
              alt=""
              className="object-fill"
            />
          </div>
        </div>
      </div>

      <div className="rounded-[18px] bg-secondary-custom flex flex-col items-center justify-center gap-4 py-8 mr-3 md:mr-10 lg:px-[100px]">
        <p className="font-bold text-others-light-1 text-[18px]">
          Weekly Progress
        </p>
        <div>
          <img src="/images/progress-pie-chart-icon.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default SalesProgress;
