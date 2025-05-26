import AccountSettings from "../../components/User/Settings/AccountSettings";
import ChangePassword from "../../components/User/Settings/ChangePassword";
import ShippingAddress from "../../components/User/Settings/ShippingAddress";

function Settings() {
  return (
    <div className="px-5 w-full pb-[75px]">
      <AccountSettings />
      <ShippingAddress />
      <ChangePassword />
    </div>
  );
}

export default Settings;
