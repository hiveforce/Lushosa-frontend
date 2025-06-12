import Button from "../../ui/Button";
import { Input } from "../ui/input";

function ResetPassword() {
  return (
    <div className="flex mx-auto justify-center items-center px-5 py-10">
      <div className="w-full border border-primary-header rounded max-w-[424px] sm:shadow-2xl  p-8">
        <p className="text-[20px] font-semibold text-center">Reset Password</p>
        <p className="text-center mt-3 text-[14px] text-secondary-light-active  ">
          Forgot Your Password? Don't Worry, Reset It Now and Continue Where You
          Left Off. Try to remember your password next time.
        </p>

        <form action="">
          <div className="mt-6">
            <p className="">Password</p>
            <Input
              type="email"
              placeholder="8+ characters"
              className={`w-full shadow-none border  text-[#2A2A2A] text-[16px]   p-5 focus:outline-none active:outline-none   mt-2`}
            />
          </div>
          <div className="mt-6">
            <p className="">Confirm Password</p>
            <Input
              type="password"
              placeholder=""
              className={`w-full shadow-none border  text-[#2A2A2A] text-[16px]   p-5 focus:outline-none active:outline-none   mt-2`}
            />
          </div>
          <Button className="rounded-[2px] w-full mt-6 py-3">
            Reset Password
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
