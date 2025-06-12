import Button from "../../ui/Button";
import { Input } from "../ui/input";

function ForgotPassword({ setShowForgotPassword }: any) {
  return (
    <div className="w-full border border-primary-header rounded max-w-[424px] p-8 shadow-2xl">
      <p className="text-[20px] font-semibold text-center">Forgot password</p>
      <p className="text-center mt-3 text-[14px] text-secondary-light-active">
        Enter the email address associated with your account. Then use the link
        sent to your email to reset your password.
      </p>

      <div className="mt-6">
        <p className="">Email Address</p>
        <Input
          type="email"
          placeholder="e.g engeenum@gmail.com"
          className={`w-full shadow-none border  text-[#2A2A2A] text-[16px]   p-5 focus:outline-none active:outline-none   mt-2`}
        />
      </div>
      <Button className="rounded-[2px] w-full mt-6 py-3">Send Link</Button>
      <p className="font-normal text-[14px] text-secondary-light-active mt-6">
        Already have account?{" "}
        <span
          className="text-primary-custom cursor-pointer "
          role="button"
          onClick={() => setShowForgotPassword(false)}
        >
          Sign In
        </span>
      </p>
    </div>
  );
}

export default ForgotPassword;
