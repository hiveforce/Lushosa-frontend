function OrderAdmin() {
  return (
    <div className="grid grid-flow-col auto-cols-max gap-3 py-4 border-y items-center pl-5">
      <div className="min-w-[100px] text-[14px] font-normal text-secondary-custom">
        #ORD-7652
      </div>
      <div className="flex items-center gap-3 min-w-[200px]">
        <div>
          <img
            src="/images/admin-avatar-icon.png"
            alt="avatar"
            className="size-8"
          />
        </div>
        <div>
          <p className="font-medium text-[14px] text-secondary-custom">
            Emily Rodriguez
          </p>
          <p className="font-normal text-[12px] text-[#5c5c5c]">
            emily.r@example.com
          </p>
        </div>
      </div>
      <div className="ml-5 min-w-[180px]">
        <p className="font-normal text-[14px] text-secondary-custom">
          Silky Straight Lace Front
        </p>
        <p className="text-[12px] font-normal text-[#5c5c5c]">
          Natural Black, 22"
        </p>
      </div>
      <div className="font-normal text-[14px] text-[#5c5c5c] ml-3 min-w-[100px]">
        May 26, 2025
      </div>
      <div className="font-medium text-[14px] text-secondary-custom min-w-[80px]">
        $289.99
      </div>
      <div className=" text-primary-custom  text-[12px] h-fit min-w-[90px]">
        <p className="bg-primary-header rounded-full px-2 py-1 w-fit">
          Processing
        </p>
      </div>
      <div className="text-[12px] font-medium text-others-normal-green  w-fit h-fit min-w-[80px]">
        <p className="bg-[#1FC16B1A] w-fit px-2 py-1   rounded-full">Paid</p>
      </div>
    </div>
  );
}

export default OrderAdmin;
