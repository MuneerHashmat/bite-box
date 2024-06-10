import { useState } from "react";
import assets from "../assets/assets";
import {
  ShoppingCartOutlined,
  Menu,
  Close,
  AccountCircle,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleActive } from "../reducers/userSlice";

const Navbar = () => {
  const [show, setShow] = useState(false); //for hamburger menu
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

      <div className="flex justify-between sm:gap-5 gap-2 items-center">
        <Link to="/cart">
          <div className="hover:cursor-pointer hover:underline hover:text-[#FC8019] transition-all flex relative">
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
          <div className="fixed z-30 top-[60px] right-6 flex flex-col gap-2 bg-gray-200 p-3">
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
          <div className="md:hidden block fixed w-[30vw] top-[40px] right-0 bg-white shadow-sm py-3">
            {user.active ? (
              <AccountCircle />
            ) : (
              <button className="bg-[#FC8019] px-3 py-1 hover:scale-105 transition-all rounded-full text-white font-semibold">
                sign In
              </button>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
