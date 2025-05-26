import CartItems from "../components/Cart/CartItems";
import CartSummary from "../components/Cart/CartSummary";
import SimilarProducts from "../ui/SimilarProducts";

function Cart() {
  return (
    <div>
      <div className="pt-[73px] lg:pt-[130px] md:px-[65px] md:py0px] lg:flex lg:gap-[38px]">
        <CartItems />
        <CartSummary />
      </div>

      <SimilarProducts />
    </div>
  );
}

export default Cart;
