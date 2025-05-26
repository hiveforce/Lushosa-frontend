import Button from "../../../ui/Button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

function AccountSettings() {
  return (
    <div className="border w-full rounded-[6px] ">
      <h1 className="font-medium text-[20px] py-[21px] px-5 border-b">
        Account Setting
      </h1>

      <form className=" px-6 py-8 space-y-[22px] max-w-[495px] md:max-w-full ">
        <div className="space-y-[22px] md:flex md:w-full md:space-x-[22px] md:space-y-0">
          <div className="md:flex-1 ">
            <Label htmlFor="name" className="text-[16px] font-normal ">
              Full name
            </Label>

            <Input className="outline-none mt-1" />
          </div>
          <div className="md:flex-1">
            <Label htmlFor="email" className="text-[16px] font-normal ">
              Email
            </Label>

            <Input className="outline-none mt-1" />
          </div>
        </div>

        <div className="space-y-[22px] md:flex md:w-full md:space-x-[22px] md:space-y-0 ">
          <div className="md:flex-1">
            <Label htmlFor="Country" className="text-[16px] font-normal ">
              Country
            </Label>

            <Input className="outline-none mt-1" />
          </div>
          <div className="md:flex-1">
            <Label htmlFor="Phone Number" className="text-[16px] font-normal ">
              Phone Number
            </Label>

            <Input className="outline-none mt-1" />
          </div>
        </div>

        <div className="space-y-[22px] md:flex md:w-full md:space-x-[22px] md:space-y-0 ">
          <div className="md:flex-1">
            <Label htmlFor="name" className="text-[16px] font-normal ">
              State
            </Label>

            <Input className="outline-none mt-1" />
          </div>
          <div className="md:flex-1">
            <Label htmlFor="name" className="text-[16px] font-normal ">
              Address
            </Label>

            <Input className="outline-none mt-1" />
          </div>
        </div>

        <Button icon={false} className="py-2 rounded-[44px] md:py-4">
          Save Changes
        </Button>
      </form>
    </div>
  );
}

export default AccountSettings;
