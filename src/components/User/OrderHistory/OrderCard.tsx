import Button from "../../../ui/Button";

function OrderCard() {
  return (
    <div className="border-y px-5 py-[18px]  lg:flex lg:justify-between lg:items-center md:shadow-none lg:border-b-0 rounded-t-[7px] lg:pr">
      <div className="flex gap-4 items-center pb-4  lg:border-none lg:hidden">
        <div className=" max-w-[66px] lg:max-w-[72px] lg:hidden">
          <img src="/images/wigs-collection-img2.png" alt="" className="" />
        </div>
        <div className="text-secondary-custom lg:hidden">
          <h1 className="font-medium text-[16px] lg:text-[16px]">
            Malaysian Curly Bundle
          </h1>
          <p className="text-[16px] font-medium ">Order #9645976123</p>
          <p className="bg-others-normal-green text-others-light-1 w-fit rounded mt-4">
            COMPLETED
          </p>
          <p className="font-medium text-[16px]">Dec 30, 2019 07:52</p>
        </div>
      </div>
      <div className="hidden lg:flex justify-between flex-1 text-secondary-light-active text-[16px] font-medium">
        <p className="text-secondary-custom">#964597611</p>
        <p className="font-semibold text-others-normal-yellow">IN PROGRESS</p>
        <p>Dec 30, 2019 05:18</p>
        <p>$1,500 (5 Products)</p>
        <Button
          className="font-semibold text-[16px] bg-transparent text-primary-custom"
          type="others"
          icon={false}
        >
          View Details
        </Button>
      </div>
    </div>
  );
}

export default OrderCard;
