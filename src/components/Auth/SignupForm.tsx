import Button from "../../ui/Button";
import { Input } from "../ui/input";

function SignupForm() {
  return (
    <div className="mx-5 mt-3 pb-6 max-w-[]">
      <form
        action="
        "
      >
        <div className=" ">
          <p className="">Full Name</p>
          <Input
            type="name"
            placeholder="e.g John Doe"
            className={`w-full shadow-none border  text-[#2A2A2A] text-[16px]   p-5 focus:outline-none active:outline-none  mt-2`}
          />
        </div>

        <div className=" mt-4">
          <p className="">Email Address</p>
          <Input
            type="email"
            placeholder="e.g example@gmail.com"
            className={`w-full shadow-none border  text-[#2A2A2A] text-[16px]   p-5 focus:outline-none active:outline-none  mt-2`}
          />
        </div>

        <div className="mt-4 ">
          <p className="">Password</p>
          <Input
            type="email"
            placeholder="8+ characters"
            className={`w-full shadow-none border  text-[#2A2A2A] text-[16px]   p-5 focus:outline-none active:outline-none   mt-2`}
          />
        </div>
        <div className="mt-4 ">
          <p className="">Confirm Password</p>
          <Input
            type="email"
            placeholder="8+ characters"
            className={`w-full shadow-none border  text-[#2A2A2A] text-[16px]   p-5 focus:outline-none active:outline-none   mt-2`}
          />
        </div>

        <Button className="w-full mt-[35px] rounded-[2px] py-3">Sign Up</Button>
      </form>
    </div>
  );
}

export default SignupForm;
