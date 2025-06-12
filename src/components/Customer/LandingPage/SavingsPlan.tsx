import Button from "../../../ui/Button";
import { savingsPlanData } from "../../../utils/data";

function SavingsPlan() {
  return (
    <div className="bg-primary-light-hover lg:py-[130px] py-[50px] sm:py-[100px] lg:px-[82px] px-[20px] flex justify-between gap-[73px] lg:items-center flex-col lg:flex-row items-start">
      <div className="flex gap-5 shrink-0 flex-col sm:flex-row mx-auto">
        <div className="max-w-[319px] h-[468px]  rounded-[22px] justify-self-center">
          <img
            src="/images/img-green.jpg"
            alt=""
            className="w-full h-full object-cover rounded-[22px] "
          />
        </div>
        <div className="sm:max-w-[226px] h-[468px]  rounded-[22px] w-full">
          <img
            src="/images/img-savings-plan.jpg"
            alt=""
            className="w-full h-full object-cover rounded-[22px]"
          />
        </div>
      </div>

      <div>
        <h1 className="text-[36px] text-secondary-custom font-bold">
          100-Day Savings Plan
        </h1>
        <p className="text-[20px] font-normal text-secondary-custom mt-3">
          Can't afford your dream hair bundle right now? Our 100-day savings
          plan allows you to make small installment payments until you reach
          your goal.
        </p>
        <ul className="mt-3">
          {savingsPlanData.map((item) => (
            <li
              className="flex gap-2 items-center text-[16px] font-normal text-secondary-custom"
              key={item}
            >
              <img
                src="/images/check-pink-icon.png"
                alt="check"
                className="size-5"
              />
              {item}
            </li>
          ))}
        </ul>
        <Button className="mt-5 py-2 rounded-[30px] text-[16px]">
          Learn More
        </Button>
      </div>
    </div>
  );
}

export default SavingsPlan;
