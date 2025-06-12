import WishlistCard from "./WishlistCard";

function WishlistItems() {
  return (
    <div className="md:border rounded-[16px] lg:flex-1 lg:mb-[130px] mb-[75px]">
      <h1 className="py-5 px-6 text-[20px] font-medium hidden lg:block">
        Wishlist
      </h1>

      <div className="bg-primary-header py-[10px] px-6 lg:flex hidden justify-between xl:pr-60 pr-20">
        <div className="flex-">PRODUCTS</div>
        <div className="flex justify-around fle gap-20">
          <p>PRICE</p>
          <p>STOCK STATUS</p>
          <p>ACTIONS</p>
        </div>
      </div>

      <div>
        <WishlistCard />
        <WishlistCard />
        <WishlistCard />
        <WishlistCard />
      </div>
    </div>
  );
}

export default WishlistItems;
