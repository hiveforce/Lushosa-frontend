function Hero() {
  return (
    <div>
      <div className="flex items- gap-6">
        <div className="w-ful space-y-[11px]">
          <div className="h-[]">
            <img src="/images/product-small-img.png" alt="" />
          </div>
          <div>
            <img src="/images/product-small-img.png" alt="" />
          </div>
          <div>
            <img src="/images/product-small-img.png" alt="" />
          </div>
        </div>
        <div className="border border-re w-full h-full">
          <img
            src="/images/product-small-img.png"
            alt=""
            className="object-contain w-full h-full"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Hero;
