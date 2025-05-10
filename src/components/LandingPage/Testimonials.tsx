import { testimonialData } from "../../utils/data";
import Testimonial from "./Testimonial";

function Testimonials() {
  return (
    <div className="px-5 ">
      <div className="text-center mt-[70px]">
        <h1 className="font-bold text-[24px] text-secondary-custom">
          Customer Testimonials
        </h1>
        <p className="text-[16px] font-normal  text-secondary-custom">
          Don't just take our word for it. Here's what our customers have to say
          about our hair bundles.
        </p>
      </div>
      <div className="mt-[48px] flex flex-wrap gap-[15px] items-center justify-center">
        {testimonialData.map((data) => (
          <Testimonial
            content={data.content}
            name={data.name}
            key={data.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
