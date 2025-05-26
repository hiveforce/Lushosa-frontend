import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";

function TrackOrder() {
  const navigate = useNavigate();
  return (
    <div className="px-5 pb-[75px]">
      <h1 className="text-[32px] font-semibold">Track Order</h1>
      <p className="text-secondary-light-active text-[16px] font-normal mt-4 max-w-[667px]">
        To track your order please enter your order ID in the input field below
        and press the “Track Order” button. this was given to you on your
        receipt and in the confirmation email you should have received.
      </p>

      <form action="" className="mt-6 max-w-[424px]">
        <div>
          <label htmlFor="">Order ID</label>
          <input
            type="text"
            className="w-full border border-secondary-light-hover rounded-md px-4 py-2 mt-2"
            placeholder="ID..."
          />
        </div>

        <Button
          className="mt-6 py-3 rounded-[29px] sm:w-full sm:max-w-[356px] bg-primary-custom"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            navigate("/user/track-order/12345");
          }}
        >
          Track Order
        </Button>
      </form>
    </div>
  );
}

export default TrackOrder;
