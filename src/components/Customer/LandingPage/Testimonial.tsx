function Testimonial({ content, name }: { content: string; name: string }) {
  return (
    <div className="max-w-[353px] border border-primary-custom rounded-[8px] shadow-2xl p-5 lg:max-w-[426px] bg-others-light-1">
      <div className="flex items-center gap-[13px]">
        <div className="size-[50px] bg-secondary-light  rounded-full"></div>
        <div>
          <p className="text-[14px] font-semibold">{name}</p>
          <img src="/images/stars-icon.png" alt="" />
        </div>
      </div>
      <p className="text-[14px] font-normal mt-3">{content}</p>
    </div>
  );
}

export default Testimonial;
