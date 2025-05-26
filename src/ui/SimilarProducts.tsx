import ProductCard from "./ProductCard";

function SimilarProducts() {
  return (
    <div className="py-[75px] px-5 lg:py-[122px] lg:px-[65px]">
      <h1 className="text-[24px] font-bold text-secondary-custom text-center">
        Similar products
      </h1>

      <div className="grid  sm:grid-cols-2 [@media(min-width:820px)]:grid-cols-3 lg:flex lg:overflow-x-auto gap-6 mt-[31px]">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default SimilarProducts;
