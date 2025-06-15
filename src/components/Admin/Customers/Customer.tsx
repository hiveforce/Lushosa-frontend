function Customer() {
  return (
    <div className="grid grid-flow-col  gap-3 py-4 border-y items-center pl-5">
      <div className="min-w-[50px] text-[14px] font-normal text-secondary-custom">
        USER23481
      </div>
      <div className="flex items-center gap-3 min-w-[150px]">
        <div>
          <img
            src="/images/admin-avatar-icon.png"
            alt="avatar"
            className="size-8"
          />
        </div>
        <p className=" font-medium text-[14px] text-secondary-custom">
          Jennifer Thompson
        </p>
      </div>
      <div className="ml-5 min-w-[180px]">sit_amet@gmail.com</div>
      <div className="font-normal text-[14px] text-[#5c5c5c] ml-3 min-w-[150px]">
        May 26, 2025
      </div>
      <div className="font-medium text-[14px] text-secondary-custom min-w-[50px]">
        <img src="/images/trash-icon.png" alt="" />
      </div>
    </div>
  );
}

export default Customer;
