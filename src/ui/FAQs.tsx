import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

function FAQs() {
  return (
    <div className="px-5 py-[75px] sm:px-8 md:px-10 lg:px-[]">
      <div>
        <h1 className="font-bold text-[24px] text-center">
          Frequently Asked Questions
        </h1>
        <p className="mt-2 font-normal text-[16px] lg:text-[20px]  text-center">
          Find quick answers to the most common questions about our products
          orders, and services.
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="space-y-4 border-b border-secondary-light-active mt-6 max-w-[711px] mx-auto lg:mt-12"
      >
        <AccordionItem
          value="item-1"
          className="border border-secondary-light-active rounded-[4px] p-6"
        >
          <AccordionTrigger className="font-medium text-[18px] text-secondary-custom">
            Is there a minimum payment amount?
          </AccordionTrigger>
          <AccordionContent className="text-secondary-light-active font-normal text-[16px]">
            No, there is no minimum payment amount. You can pay as little or as
            much as you want each time, as long as you complete the full payment
            within the 100-day period.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-2"
          className="border border-secondary-light-active rounded-[4px] p-6"
        >
          <AccordionTrigger className="font-medium text-[18px] text-secondary-custom">
            What happens if I don't complete the payment in 100 days?
          </AccordionTrigger>
          <AccordionContent className="text-secondary-light-active font-normal text-[16px]">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-3"
          className="border border-secondary-light-active rounded-[4px] p-6"
        >
          <AccordionTrigger className="font-medium text-[18px] text-secondary-custom">
            How do I track my savings progress?
          </AccordionTrigger>
          <AccordionContent className="text-secondary-light-active font-normal text-[16px]">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-4"
          className="border border-secondary-light-active rounded-[4px] p-6"
        >
          <AccordionTrigger className="font-medium text-[18px] text-secondary-custom">
            Can I change my selected bundle during the savings period?
          </AccordionTrigger>
          <AccordionContent className="text-secondary-light-active font-normal text-[16px]">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-5"
          className="border border-secondary-light-active rounded-[4px] p-6"
        >
          <AccordionTrigger className="font-medium text-[18px] text-secondary-custom">
            What payment methods are accepted?
          </AccordionTrigger>
          <AccordionContent className="text-secondary-light-active font-normal text-[16px]">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default FAQs;
