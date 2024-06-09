import assets from "../assets/assets";
import { ShoppingCartOutlined } from "@mui/icons-material";

const Navbar = () => {
  return (
    <div className="w-screen fixed flex justify-between items-center py-2 px-5 sm:px-10 lg:px-20 shadow-md z-10 bg-white">
      <div>
        <img
          src={assets.main_logo}
          alt="logo"
          className="md:h-[50px] h-[35px]"
        />
      </div>

      <div className="flex justify-between sm:gap-5 gap-2 items-center">
        <div className="hover:cursor-pointer hover:underline hover:text-[#FC8019] transition-all flex">
          <ShoppingCartOutlined sx={{ fontSize: "30px" }} />
          <p className="hidden sm:block">cart</p>
        </div>
        <button className="bg-[#FC8019] px-3 py-1 hover:scale-105 transition-all rounded-full text-white font-semibold">
          sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
