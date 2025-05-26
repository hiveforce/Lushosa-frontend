import { useState } from "react";
import { stages } from "../../../utils/data";

function OrderTimeline() {
  const [currentStep] = useState(2);

  return (
    <div className="mt-6">
      <p className="font-medium text-[14px] text-secondary-light-active">
        Order expected arrival{" "}
        <span className="text-secondary-custom">23 Jan, 2021</span>
      </p>

      <div className="flex mt-6 gap-[17px] sm:gap-5 sm:flex-col sm:justify-center sm:items-center max-w-[582px] sm:mx-auto">
        <div className="flex flex-col items-start justify-start w-fit sm:flex-row sm:h-fit sm:items-center sm:w-full sm:max-w-[530px]">
          <Circle active={currentStep >= 1} firstStep={true} />
          <Pillar active={currentStep >= 2} />
          <Circle active={currentStep >= 2} />
          <Pillar active={currentStep >= 3} />
          <Circle active={currentStep >= 3} />
          <Pillar active={currentStep >= 4} />
          <Circle active={currentStep >= 4} />
        </div>

        <div className="space-y-[24px] sm:flex sm:justify-between sm:w-full sm:space-y-0">
          {stages.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap items-center ${
                currentStep < index + 1 ? "opacity-50" : ""
              }`}
            >
              <img src={item.icon} alt="" />
              <p className="font-medium text-[14px] text-secondary-custom">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrderTimeline;

function Circle({
  active,
  firstStep,
}: {
  active: boolean;
  firstStep?: boolean;
}) {
  return (
    <div
      className={`py-0.5 w-[24px] h-[24px] flex items-center justify-center rounded-full border border-primary-custom ${
        active ? "bg-primary-custom" : ""
      }`}
    >
      {firstStep && (
        <img
          src="/images/check-white-icon.png"
          alt=""
          className="w-[12px] h-[12px] object-contain"
        />
      )}
    </div>
  );
}

function Pillar({ active }: { active: boolean }) {
  return (
    <div
      className={`mx-auto w-[8px] h-[62px] sm:h-2 sm:flex-1 sm clip-path-[ellipse(4px_4px_at_center_bottom)] ${
        active ? "bg-primary-custom" : "bg-[#FACBCB]"
      }`}
    ></div>
  );
}
