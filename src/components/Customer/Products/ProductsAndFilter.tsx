import ProductCard from "../../../ui/ProductCard";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import TagsFilter from "./TagsFilter";

function ProductsAndFilter() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-6">
      <div className="hidden lg:block w-full max-w-[210px] space-y-6">
        <PriceFilter />
        <CategoryFilter />
        <TagsFilter />
      </div>
      <div>
        <div className="flex justify-between mb-[26px] items-center ">
          <p className="text-[16px] font-semibold text-secondary-light-active">
            Showing 1–12 of 100 item(s)
          </p>
          <div className="size-[37px] lg:hidden">
            <img src="/images/filter-icon.png" alt="" />
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 :grid-cols-3 [@media(min-width:800px)]:grid-cols-3">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default ProductsAndFilter;
