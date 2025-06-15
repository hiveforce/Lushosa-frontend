function AdminInventory() {
  return (
    <div className="grid grid-flow-col auto-cols-max gap-3 py-4 border-y items-center pl-5">
      <div className="flex items-center gap-3 min-w-[230px]">
        <div>
          <img src="/images/product-icon.png" alt="avatar" className="size-8" />
        </div>
        <div className="ml min-w-[180px]">
          <p className="font-normal text-[14px] text-secondary-custom">
            Silky Straight Lace Front
          </p>
          <p className="text-[12px] font-normal text-[#5c5c5c]">
            Natural Black, 22"
          </p>
        </div>
      </div>
      <div className="min-w-[130px] text-[14px] font-normal text-[#404040]">
        WIG-SLF-22-BLK
      </div>
      <div className="ml-5 min-w-[100px] font-normal text-[12px]">
        Curly Wig
      </div>
      <div className="font-medium text-[12px] text-secondary-custom ml-3 min-w-[90px]">
        $289.99
      </div>
      <div className="font-medium text-[14px] text-[#404040] min-w-[80px] flex items-center gap-1">
        <input
          type="text"
          className="w-11 border rounded px-1 py-1 text-center"
          defaultValue={3}
        />
        <div className=" flex flex-col items-center justify-center  divide-y-2 rounded gap-[1px]">
          <button className="border-b-2 bg-[#E5E7EB] px-2 py-1 rounded-t-[4px]">
            <img src="/images/arrow-up-black-icon.png" alt="" />
          </button>
          <button className=" px-2 py-1 bg-[#E5E7EB] border-t-2 rounded-b-[4px]">
            <img src="/images/arrow-down-black-icon.png" alt="" />
          </button>
        </div>
      </div>
      <div className="   text-[12px]  font-medium  min-w-[100px] text-others-normal-green  w-fit text-center">
        <p className="bg-[#1FC16B1A] py-[2px] px-[10px] rounded-full w-fit">
          In stock
        </p>
      </div>
      <div className="text-[12px] font-medium  min-w-[80px] space-x-1">
        <button>
          <img src="/images/edit-icon.png" alt="edit" />
        </button>
        <button>
          <img src="/images/trash-icon.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default AdminInventory;
