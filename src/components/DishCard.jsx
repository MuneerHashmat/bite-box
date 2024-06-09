import PropTypes from "prop-types";
import { LocalShipping, Timer, Star } from "@mui/icons-material";
import toast, { Toaster } from "react-hot-toast";
const DishCard = ({ dish }) => {
  return (
    <div className="w-[290px] rounded-md overflow-hidden cursor-pointer shadow-md relative">
      <Toaster />
      <img
        src={dish.image}
        alt={dish.name}
        className="w-full object-cover hover:scale-110 transition-all h-[256px]"
      />

      <div className="px-4 py-2 mt-6 flex flex-col gap-2">
        <h1 className="font-bold text-xl text-gray-700">{dish.name}</h1>
        <div className="text-sm text-gray-500 flex gap-3">
          <span>
            <LocalShipping sx={{ fontSize: "16px", color: "orange" }} /> Free
            Delivery
          </span>
          <span>
            <Timer sx={{ fontSize: "16px", color: "green" }} /> 15 to 30 mins
          </span>
        </div>

        <div className="py-1 mt-4 flex justify-between items-center">
          <p className="text-gray-600">
            Price: <span> &#8377;{dish.price}</span>
          </p>

          <button
            onClick={() => toast.success("added")}
            className="bg-[#FC8019] text-sm font-semibold text-white rounded-md p-2 hover:scale-105 transition-all"
          >
            Add to cart
          </button>
        </div>
      </div>

      <div className="absolute right-[-12px] top-10 bg-white rounded-full pr-5 py-1">
        <Star sx={{ color: "#fcba03" }} /> {dish.rating}
      </div>
    </div>
  );
};

DishCard.propTypes = {
  dish: PropTypes.object,
};

export default DishCard;
