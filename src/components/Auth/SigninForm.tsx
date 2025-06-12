import Button from "../../ui/Button";
import { Input } from "../ui/input";

function SigninForm({ setShowForgotPassword }: any) {
  return (
    <div className="mx-5 mt-3 pb-6 max-w-[]">
      <form
        action="
        "
      >
        <div className=" ">
          <p className="">Email Address</p>
          <Input
            type="email"
            placeholder="e.g engeenum@gmail.com"
            className={`w-full shadow-none border  text-[#2A2A2A] text-[16px]   p-5 focus:outline-none active:outline-none  mt-2`}
          />
        </div>

        <div className="mt-4 ">
          <p className="">Password</p>
          <Input
            type="email"
            placeholder="e.g engeenum@gmail.com"
            className={`w-full shadow-none border  text-[#2A2A2A] text-[16px]   p-5 focus:outline-none active:outline-none   mt-2`}
          />
        </div>
        <p
          className="text-end text-others-normal-red font-medium text-[14px] mt-2 cursor-pointer"
          role="button"
          onClick={() => setShowForgotPassword(true)}
        >
          Forgot Passoword?
        </p>

        <Button className="w-full mt-[35px] rounded-[2px] py-3">
          {" "}
          Sign In
        </Button>
      </form>
    </div>
  );
}

export default SigninForm;
