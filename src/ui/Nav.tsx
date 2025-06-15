import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useState } from "react";
import NavLinks from "./NavLinks";

function Nav() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="bg-primary-header px-5 pt-[27px] pb-4 relative">
      <div className="flex justify-between items-center ">
        <div className="flex gap-2 items-center">
          <button className="lg:hidden" onClick={() => setShowNav(true)}>
            <img src="/images/hamburger-icon.png" alt="" />
          </button>
          <Logo />
        </div>
        <div className="flex items-center gap-[28px]">
          <NavLinks className="hidden lg:flex" />

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
            <Link
              to="/wishlist"
              className="bg-white p-2 md:p-[10px] rounded-[5px] "
            >
              <img src="/images/heart-icon.png" alt="like-icon" className="" />
            </Link>
            <Link
              to="/user"
              className="bg-white p-2 rounded-[5px] md:p-[10px] "
            >
              <img
                src="/images/profile-icon.png"
                alt="profile-icon"
                className="w-[12px]"
              />
            </Link>
            <Link
              to="/cart"
              className="bg-white p-2 rounded-[5px] md:p-[10px] "
            >
              <img
                src="/images/cart-icon.png"
                alt="cart-icon"
                className="w-[12px]"
              />
            </Link>
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

      {showNav && (
        <div className="absolute bg-primary-header/90 z-20 inset-0 h-screen   lg:hidden">
          <NavLinks
            className="flex flex-col p-4 h-screen justify-center  relative items-center"
            onClick={() => setShowNav(false)}
          />
        </div>
      )}
    </div>
  );
}

export default Nav;
