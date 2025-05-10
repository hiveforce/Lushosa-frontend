import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Nav() {
  return (
    <div className="bg-primary-header px-5 pt-[27px] pb-4 ">
      <div className="flex justify-between items-center ">
        <div className="flex gap-2 items-center">
          <button className="lg:hidden">
            <img src="/images/hamburger-icon.png" alt="" />
          </button>
          <Logo />
        </div>
        <div className="flex items-center gap-[28px]">
          <ul className="lg:flex hidden gap-6">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-secondary-custom"
                  : "text-secondary-light-active font-medium text-[16px]"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                isActive
                  ? "text-secondary-custom"
                  : "text-secondary-light-active font-medium text-[16px]"
              }
            >
              Products
            </NavLink>
            <NavLink
              to={"/saving-plan"}
              className={({ isActive }) =>
                isActive
                  ? "text-secondary-custom"
                  : "text-secondary-light-active font-medium text-[16px]"
              }
            >
              Saving Plan
            </NavLink>
            <NavLink
              to={"/about-us"}
              className={({ isActive }) =>
                isActive
                  ? "text-secondary-custom"
                  : "text-secondary-light-active font-medium text-[16px]"
              }
            >
              About us
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive
                  ? "text-secondary-custom"
                  : "text-secondary-light-active font-medium text-[16px]"
              }
            >
              Contact
            </NavLink>
          </ul>
          <div className="relative hidden md:inline-flex">
            <input
              type="text"
              className="border rounded-[12px] bg-white border-secondary-light-active w-full py-[7px] outline-none pl-8 max-w-[300px]"
              placeholder="Search products..."
            />
            <img
              src="/images/search-icon.png"
              alt="search"
              className="absolute top-[13px] left-4"
            />
          </div>
          <div className="flex gap-[10px]">
            <button className="bg-white p-2 md:p-[10px] rounded-[5px] ">
              <img src="/images/heart-icon.png" alt="like-icon" className="" />
            </button>
            <button className="bg-white p-2 rounded-[5px] md:p-[10px] ">
              <img
                src="/images/profile-icon.png"
                alt="profile-icon"
                className="w-[12px]"
              />
            </button>
            <button className="bg-white p-2 rounded-[5px] md:p-[10px] ">
              <img
                src="/images/cart-icon.png"
                alt="cart-icon"
                className="w-[12px]"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="relative md:hidden">
        <input
          type="text"
          className="border rounded-[12px] bg-white border-secondary-light-active w-full py-3 outline-none pl-8"
          placeholder="Search products..."
        />
        <img
          src="/images/search-icon.png"
          alt="search"
          className="absolute top-[18px] left-4"
        />
      </div>
    </div>
  );
}

export default Nav;
