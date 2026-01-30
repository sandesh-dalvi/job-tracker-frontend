import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IoIosLogOut } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import Logo from "./Logo";

import { clearStore } from "../features/user/userSlice";

const Navbar = ({ onMenuClick }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (
    <nav className=" bg-surface border-b border-border sticky top-0 z-40">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className=" flex items-center justify-between h-16">
          {/* logo */}
          <div className=" flex items-center gap-3">
            <button
              type="button"
              className=" md:hidden cursor-pointer text-content-alt"
              onClick={onMenuClick}
            >
              <IoMenu className=" w-10 h-10" />
            </button>
            <div className="">
              <Logo />
            </div>
            <h1 className=" text-xl font-bold">Job Tracker</h1>
          </div>

          {/*user button */}
          <div className=" relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className=" flex items-center gap-3 p-2 rounded-lg hover:bg-muted-dark transition-colors cursor-pointer "
            >
              <div className="w-9 h-9 bg-secondary rounded-full flex items-center justify-center shadow hover:bg-secondary-dark transition-all duration-300 capitalize">
                <span className="text-surface font-semibold">
                  {user?.name?.charAt(0)}
                </span>
              </div>
              <span className="font-medium text-content hidden sm:block capitalize">
                {user?.name}
              </span>
            </button>

            {/*  */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-surfce rounded-lg shadow-lg border border-border">
                {/* <Link
                  to={"/profile"}
                  className="flex items-center gap-3 px-4 py-2 text-sm text-content hover:bg-muted"
                >
                  <CiUser className="w-4 h-4" />
                  View Profile
                </Link> */}
                {/* <hr className="my-2 border-border" /> */}
                <button
                  className="flex items-center gap-3 px-4 py-4 text-sm text-error hover:bg-error-light/20 w-full cursor-pointer"
                  onClick={() => {
                    dispatch(clearStore("Logging Out..."));
                    setShowProfileMenu(false);
                  }}
                >
                  <IoIosLogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
