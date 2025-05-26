import { NavLink } from "react-router-dom";
import { userNavItems } from "../utils/data";

function UserNav() {
  return (
    <div className="hidden lg:inline-flex border border-secondary-light-hover h-fit py-4 w-full max-w-[250px] shadow-2xl rounded ">
      <ul className="w-full text-secondary-light-active">
        {userNavItems.map((item, index) => (
          <NavLink
            key={index}
            end={index === 0}
            to={item.link}
            className={({ isActive }) =>
              `px-[24px] text-[16px] font-normal  py-[10px]  flex items-center gap-3 ${
                isActive ? "bg-primary-custom text-others-light-1" : ""
              }`
            }
          >
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? item.activeIcon : item.icon}
                  alt={item.title}
                  className="w-5 h-5"
                />
                <span>{item.title}</span>
              </>
            )}
          </NavLink>
        ))}

        <button className="px-[24px] text-[16px] font-normal  py-[10px]  flex items-center gap-3">
          <img src="/images/user-logout-icon.png" alt="" />
          Logout
        </button>
      </ul>
    </div>
  );
}

export default UserNav;
