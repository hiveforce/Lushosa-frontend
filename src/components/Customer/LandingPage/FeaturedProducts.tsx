import ProductCard from "../../../ui/ProductCard";

function FeaturedProducts() {
  return (
    <div className="pt-[70px] px-[21px]  xl:mb-[130px] mb-[80px]">
      <div className="text-center">
        <h1 className="font-bold text-[24px] text-secondary-custom">
          Featured Products
        </h1>
        <p className="text-[16px] text-secondary-custom">
          Explore our featured hair bundles, known for their quality and
          durability.
        </p>
      </div>
      <div className="mt-6 overflow-x-auto overscroll-x-auto flex flex-col gap-6 md:flex-row mx-auto sm:grid sm:grid-cols-2 md:flex overflow-hidden">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <div className="mx-auto flex items-center justify-center mt-8">
        <button className=" py-[9px] px-[15px] border  mt-8 border-secondary-custom text-center rounded-[28px] text-[14px]  w-full  max-w-[280px]">
          View all Products
        </button>
        {/* <Button type="secondary text-secondary-custom py-3" icon={true}>
          View all Products
        </Button> */}
      </div>
    </div>
  );
}

export default FeaturedProducts;
