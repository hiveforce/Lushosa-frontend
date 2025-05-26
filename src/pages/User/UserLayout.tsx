import { Outlet } from "react-router-dom";
import UserNav from "../../ui/UserNav";

function UserLayout() {
  return (
    <div className="flex lg:px-[25px] pt-[51px] lg:gap-[30px] xl:gap-[50px] xl:px-[60px]">
      <UserNav />
      <Outlet />
    </div>
  );
}

export default UserLayout;
