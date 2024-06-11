import { useState } from "react";
import assets from "../assets/assets";
import {
  ShoppingCartOutlined,
  Menu,
  Close,
  AccountCircle,
} from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleActive } from "../reducers/userSlice";

const Navbar = () => {
  const [show, setShow] = useState(false); //for hamburger menu
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.user);
  const cartItems = useSelector((state) => state.cart.cartItems);

  console.log(user);

  return (
    <div className="w-screen fixed top-0 flex justify-between items-center py-2 px-5 sm:px-10 lg:px-20 shadow-md z-20 bg-white">
      <div>
        <img
          src={assets.main_logo}
          alt="logo"
          className="md:h-[50px] h-[35px]"
        />
      </div>

      <ul className="md:flex hidden text-lg">
        <li
          className={`hover:underline hover:text-[#fc8019] ${
            location.pathname === "/" ? "text-[#fc8019]" : "text-black"
          }`}
        >
          <Link to="/">home</Link>
        </li>
      </ul>

      <div className="flex justify-between sm:gap-5 gap-2 items-center">
        <Link to="/cart">
          <div
            className={`hover:cursor-pointer hover:underline hover:text-[#FC8019] transition-all flex relative ${
              location.pathname === "/cart" ? "text-[#fc8019]" : "text-black"
            }`}
          >
            <ShoppingCartOutlined sx={{ fontSize: "30px" }} />
            <p className="hidden sm:block">cart</p>
            <p className="bg-red-600 rounded-full text-white absolute top-[-5px] right-0 sm:right-9 text-xs w-[13px] text-center">
              {cartItems.length > 0 ? cartItems.length : ""}
            </p>
          </div>
        </Link>

        <div className="md:block hidden cursor-pointer">
          {user.active ? (
            <button onClick={() => setShowProfile(!showProfile)}>
              <AccountCircle sx={{ color: "#fc8019", fontSize: "30px" }} />
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-[#FC8019] px-3 py-1 hover:scale-105 transition-all rounded-full text-white font-semibold"
            >
              sign In
            </button>
          )}
        </div>
        {showProfile && user.active ? (
          <div className="fixed z-30 top-[60px] right-6 flex flex-col gap-2 bg-white shadow-sm p-3">
            <p>{user.userData.name ? user.userData.name : ""}</p>
            <button
              onClick={() => dispatch(toggleActive(false))}
              className="text-sm bg-[#fc8019] p-1 rounded-md text-white"
            >
              Log out
            </button>
          </div>
        ) : null}

        <button
          onClick={() => setShow(!show)}
          className="md:hidden block w-[30px]"
        >
          {show ? (
            <Close sx={{ fontSize: "30px" }} />
          ) : (
            <Menu sx={{ fontSize: "30px" }} />
          )}
        </button>

        {show ? (
          <div className="md:hidden flex fixed min-w-[170px] top-[50px] right-0 bg-white shadow-sm py-3 flex-col gap-4 z-30 p-3 rounded-md">
            <div>
              {user.active ? (
                <div className="flex items-center gap-4">
                  <div className="flex gap-1 items-center">
                    <AccountCircle sx={{ fontSize: "30px" }} />
                    <p>{user.userData.name.split(" ")[0]}</p>
                  </div>
                  <button
                    onClick={() => dispatch(toggleActive(false))}
                    className="text-sm bg-[#fc8019] p-1 rounded-md text-white hover:scale-105 transition-all"
                  >
                    Log out
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="bg-[#FC8019] p-1 hover:scale-105 transition-all text-sm rounded-md text-white font-semibold"
                >
                  sign In
                </button>
              )}
              <hr className="border-gray-600 mt-2" />
            </div>
            <Link to="/">
              <p
                className={`hover:cursor-pointer hover:underline hover:text-[#FC8019] transition-all flex relative ${
                  location.pathname === "/" ? "text-[#fc8019]" : "text-black"
                }`}
              >
                home
              </p>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
