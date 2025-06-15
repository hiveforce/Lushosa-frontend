import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function AdminNavLinks({
  onSetShowNav,
}: {
  onSetShowNav?: (showNav: boolean) => void;
}) {
  const location = useLocation();
  const [isProductRoute, setIsProductRoute] = useState(
    location.pathname.includes("products")
  );

  const [isOpen, setIsOpen] = useState(false || isProductRoute);

  useEffect(() => {
    setIsProductRoute(location.pathname.includes("products"));
  }, [location.pathname]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsProductRoute(true);
  };

  function handleClick() {
    onSetShowNav?.(false);
  }
  return (
    <nav className="text-others-light-1 flex-1">
      <NavLink
        to={"/admin"}
        end
        className={({ isActive }) =>
          `font-normal text-[14px] flex items-center gap-3 py-3 rounded-[16px] px-4  ${
            isActive ? "bg-primary-custom" : ""
          }`
        }
        onClick={handleClick}
      >
        <img
          src="/images/admin-dashboard-icon.png"
          alt="admin-dashboard-icon"
        />
        Dashboard
      </NavLink>
      <li
        className={`font-normal text-[14px] flex items-center gap-3 py-3 rounded-[16px] px-4 cursor-pointer ${
          isProductRoute ? "bg-[#404040]" : ""
        }`}
        role="button"
        onClick={toggleDropdown}
      >
        <img src="/images/admin-product-icon.png" alt="admin-product-icon" />{" "}
        Products
      </li>

      {isOpen && (
        <div className="ml-[56px]">
          <NavLink
            to={"/admin/products"}
            end
            className={({ isActive }) =>
              `font-normal text-[14px] flex items-center gap-3 py-3 rounded-[20px] px-4  ${
                isActive ? "bg-primary-custom" : ""
              }`
            }
            onClick={handleClick}
          >
            All Products
          </NavLink>
          <NavLink
            to={"/admin/products-categories"}
            end
            className={({ isActive }) =>
              `font-normal text-[14px] flex items-center gap-3 py-3 rounded-[20px] px-4  ${
                isActive ? "bg-primary-custom" : ""
              }`
            }
            onClick={handleClick}
          >
            Categories
          </NavLink>
          <NavLink
            to={"/admin/products-inventories"}
            end
            className={({ isActive }) =>
              `font-normal text-[14px] flex items-center gap-3 py-3 rounded-[20px] px-4  ${
                isActive ? "bg-primary-custom" : ""
              }`
            }
            onClick={handleClick}
          >
            Inventory
          </NavLink>
        </div>
      )}

      <NavLink
        to={"savings-plan"}
        className={({ isActive }) =>
          `font-normal text-[14px] flex items-center gap-3 py-3 rounded-[16px] px-4 ${
            isActive ? "bg-primary-custom" : ""
          }`
        }
        onClick={handleClick}
      >
        <img src="/images/admin-savings-plan-icon.png" alt="" /> Savings Plan
      </NavLink>
      <NavLink
        to={"/admin/orders"}
        className={({ isActive }) =>
          `font-normal text-[14px] flex items-center gap-3 py-3 rounded-[16px] px-4 ${
            isActive ? "bg-primary-custom" : ""
          }`
        }
        onClick={handleClick}
      >
        <img src="/images/cart-white-icon.png" alt="" />
        Orders
      </NavLink>
      {/* <li className="font-normal text-[14px] flex items-center gap-3 py-3 rounded-[16px] px-4">
              <img src="/images/admin-coupon-icon.png" alt="" />
              Coupons
            </li> */}
      <NavLink
        to={"/admin/customers"}
        className={({ isActive }) =>
          `font-normal text-[14px] flex items-center gap-3 py-3 rounded-[16px] px-4 ${
            isActive ? "bg-primary-custom" : ""
          }`
        }
        onClick={handleClick}
      >
        <img src="/images/admin-customers-icon.png" alt="" />
        Customers
      </NavLink>
      <hr className="my-4 bg-[#404040] h-[1px]" />
      <li className="font-normal text-[14px] flex items-center gap-3 py-3 rounded-[16px] px-4">
        <img src="/images/user-settings-active-icon.png" alt="" />
        Settings
      </li>
      <li className="font-normal text-[14px] flex items-center gap-3 py-3 rounded-[16px] px-4">
        <img src="/images/admin-logout-icon.png" alt="" />
        Logout
      </li>
    </nav>
  );
}

export default AdminNavLinks;
