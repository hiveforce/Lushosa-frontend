import { useEffect, useState } from "react";
import AdminNavLinks from "./AdminNavLinks";
import { useLocation } from "react-router-dom";

function AdminNav() {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowNav(false);
  }, [location.pathname]);

  //  if (showNav) {
  //   document.body.style.overflow = "hidden";
  // } else {
  //   document.body.style.overflow = "auto";
  // }
  return (
    <div className="px-5 py-6 bg-others-light-1 md:px-10 lg:py-[18px] lg:px-[18px]">
      <div className="flex justify-between items-center">
        <div className="md:flex md:flex-1 max-w-[400px] md:gap-5">
          <button className="lg:hidden" onClick={() => setShowNav(true)}>
            <img src="/images/hamburger-pink-icon.png" alt="" />
          </button>

          <div className="relative hidden md:inline-flex flex-1">
            <input
              type="text"
              placeholder="Search for products, orders, or customers..."
              className="w-full  bg-secondary-light text-[12px] font-normal p-3 rounded-md text-[#929292] pl-8 outline-none"
            />
            <img
              src="/images/search-icon.png"
              className="absolute top-3 left-2"
              alt=""
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button>
            <img src="/images/notification-icon.png" alt="" />
          </button>
          <div className="flex items-center gap-2">
            <div>
              <img src="/images/admin-avatar-icon.png" alt="" />
            </div>
            <p>Sarah Johnson</p>
          </div>
        </div>
      </div>
      <div className="relative md:hidden mt-6">
        <input
          type="text"
          placeholder="Search for products, orders, or customers..."
          className="w-full  bg-secondary-light text-[12px] font-normal p-3 rounded-md text-[#929292] pl-8 outline-none"
        />
        <img
          src="/images/search-icon.png"
          className="absolute top-3 left-2"
          alt=""
        />
      </div>

      {showNav && (
        <div className="absolute bg-secondary-custom/90 z-20 inset-0 h-screen   lg:hidden px-5 ">
          <div className="  flex items-center justify-center h-screen max-w-[400px] mx-auto relative">
            <AdminNavLinks onSetShowNav={setShowNav} />
            <button
              className="text-white absolute top-10 font-bold text-[20px] "
              onClick={() => setShowNav(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminNav;
