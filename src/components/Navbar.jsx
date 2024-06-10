import { useState } from "react";
import assets from "../assets/assets";
import {
  ShoppingCartOutlined,
  Menu,
  Close,
  AccountCircle,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [show, setShow] = useState(false); //for hamburger menu
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  console.log(user);

  return (
    <div className="w-screen fixed top-0 flex justify-between items-center py-2 px-5 sm:px-10 lg:px-20 shadow-md z-10 bg-white">
      <div>
        <img
          src={assets.main_logo}
          alt="logo"
          className="md:h-[50px] h-[35px]"
        />
      </div>

      <div className="flex justify-between sm:gap-5 gap-2 items-center">
        <Link to="/cart">
          <div className="hover:cursor-pointer hover:underline hover:text-[#FC8019] transition-all flex">
            <ShoppingCartOutlined sx={{ fontSize: "30px" }} />
            <p className="hidden sm:block">cart</p>
          </div>
        </Link>

        <div className="md:block hidden cursor-pointer">
          {user.active ? (
            <div className="flex items-center gap-1">
              <AccountCircle sx={{ color: "#fc8019", fontSize: "30px" }} />
              <p className="text-sm text-[#fc8019]">
                {user.userData?.name || null}
              </p>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-[#FC8019] px-3 py-1 hover:scale-105 transition-all rounded-full text-white font-semibold"
            >
              sign In
            </button>
          )}
        </div>

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
