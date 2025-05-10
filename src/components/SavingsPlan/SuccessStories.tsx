import { successStories } from "../../utils/data";
import Testimonial from "../LandingPage/Testimonial";

function SuccessStories() {
  return (
    <div className="bg-primary-light-hover py-[75px] px-3">
      <h1 className="font-bold text-[24px] text-secondary-custom text-center">
        Success Stories
      </h1>
      <p className="text-[16px] font-normal text-center text-secondary-custom mt-2">
        Hear from customers who have successfully completed our savings plan.
      </p>

      <div className="mt-[48px] flex flex-wrap gap-[15px] items-center justify-center">
        {successStories.map((story) => (
          <Testimonial
            key={story.name}
            name={story.name}
            content={story.content}
          />
        ))}
      </div>
    </div>
  );
}

export default SuccessStories;
