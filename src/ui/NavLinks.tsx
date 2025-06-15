import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavLinks({
  className,
  onClick,
}: {
  className: string;
  onClick?: () => void;
}) {
  const [user] = useState(true);

  return (
    <ul className={` gap-6 ${className}`} onClick={onClick}>
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

      {user && (
        <div className="border-t-2 w-full text-center flex flex-col gap-5 pt-5 lg:hidden">
          <NavLink
            to={"/user"}
            className={({ isActive }) =>
              isActive
                ? "text-secondary-custom"
                : "text-secondary-light-active font-medium text-[16px]"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to={"/user/order-history"}
            className={({ isActive }) =>
              isActive
                ? "text-secondary-custom"
                : "text-secondary-light-active font-medium text-[16px]"
            }
          >
            Order History
          </NavLink>
          <NavLink
            to={"/user/track-order"}
            className={({ isActive }) =>
              isActive
                ? "text-secondary-custom"
                : "text-secondary-light-active font-medium text-[16px]"
            }
          >
            Track Order
          </NavLink>
          <NavLink
            to={"/user/settings"}
            className={({ isActive }) =>
              isActive
                ? "text-secondary-custom"
                : "text-secondary-light-active font-medium text-[16px]"
            }
          >
            Settings
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              isActive
                ? "text-secondary-custom"
                : "text-secondary-light-active font-medium text-[16px]"
            }
          >
            Logout
          </NavLink>
        </div>
      )}
    </ul>
  );
}

export default NavLinks;
