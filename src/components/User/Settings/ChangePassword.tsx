import Button from "../../../ui/Button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

function ChangePassword() {
  return (
    <div className="border w-full rounded-[6px]  mt-[33px]">
      <h1 className="font-medium text-[20px] py-[21px] px-5 border-b">
        CHANGE PASSWORD
      </h1>

      <form className=" px-6 py-8 space-y-[22px] max-w-[495px] md:max-w-full ">
        <div className="space-y-[22px] md:flex md:w-full md:space-x-[22px] md:space-y-0">
          <div className="md:flex-1 ">
            <Label htmlFor="email" className="text-[16px] font-normal ">
              Email
            </Label>

            <Input className="outline-none mt-1" />
          </div>
        </div>

        <Button icon={false} className="py-2 rounded-[44px] md:py-4">
          Proceed to change password
        </Button>
      </form>
    </div>
  );
}

export default ChangePassword;
