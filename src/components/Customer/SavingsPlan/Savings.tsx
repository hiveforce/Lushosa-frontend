import Button from "../../../ui/Button";
import { savingsPlanSteps } from "../../../utils/data";

function Savings() {
  return (
    <div className="py-[75px] px-5 md:px-10 sm:px-8 lg:px-[73px] md:flex md:gap-5 md:items-start lg:gap-[47p md:justify-between">
      <div className="space-y-4 md:max-w-[350px] lg:max-w-[472px]">
        {savingsPlanSteps.map((step, i) => (
          <div
            className="border border-[#E5E5E5] py-[14px] px-[18px] rounded-[6px]"
            key={step.header}
          >
            <p className="font-bold text-[16px] py-[5px] px-[13px] bg-primary-light-active text-primary rounded-full w-fit">
              {i + 1}
            </p>
            <h1 className="font-semibold text-[20px] text-secondary-custom mt-[5px] mb-1">
              {step.header}
            </h1>
            <p className="text-[#6B7280]">{step.content}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 md:mt-0">
        <form
          action=""
          className="border border-[#FECDD3] py-6 px-5 rounded-[8px]"
        >
          <h1 className="font-semibold text-[24px] text-secondary-custom">
            Create an Account
          </h1>
          <p className="text-[16px] font-normal text-[#737373] mt-[10px]">
            Sign up for a Lushosa Hair account to get started with your savings
            plan.
          </p>
          <div className="lg:flex lg:gap-4">
            <div className="mt-6 lg">
              <label className="font-medium text-[14px] text-secondary-custom">
                First Name
              </label>
              <input
                type="text"
                className="border w-full  border-[#E5E5E5] rounded-[6px] mt-1 outline-none py-1 px-4"
              />
            </div>

            <div className="mt-4 lg:mt-6">
              <label className="font-medium text-[14px] text-secondary-custom">
                Last Name
              </label>
              <input
                type="text"
                className="border w-full text-[] border-[#E5E5E5] rounded-[6px] mt-1 outline-none py-1 px-4"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="font-medium text-[14px] text-secondary-custom">
              Email
            </label>
            <input
              type="text"
              className="border w-full text-[] border-[#E5E5E5] rounded-[6px] mt-1 outline-none py-1 px-4"
            />
          </div>

          <div className="mt-4">
            <label className="font-medium text-[14px] text-secondary-custom">
              Phone Number
            </label>
            <input
              type="text"
              className="border w-full text-[] border-[#E5E5E5] rounded-[6px] mt-1 outline-none py-1 px-4"
            />
          </div>

          <Button icon={false} className="rounded-md py-2 mt-4">
            Create Account & Start Saving
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Savings;
