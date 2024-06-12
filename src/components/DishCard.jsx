import PropTypes from "prop-types";
import {
  LocalShipping,
  Timer,
  Star,
  AddCircleOutline,
  RemoveCircleOutline,
} from "@mui/icons-material";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemToCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  deleteItem,
} from "../reducers/cartSlice";

const DishCard = ({ dish }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartItem =
    cartItems.length > 0
      ? cartItems.find((item) => item?.id === dish.id)
      : undefined;

  const handleAddToCart = () => {
    if (!user.active) {
      toast.error("sign in to add items to cart", { duration: 2000 });
      return;
    }
    dispatch(addItemToCart(dish));
    toast.success("item added to cart", { duration: 2000 });
  };

  const handleIncrement = () => {
    dispatch(increaseItemQuantity(dish.id));
  };

  const handleDecrement = () => {
    if (cartItem && cartItem.quantity > 1) {
      dispatch(decreaseItemQuantity(dish.id));
    } else {
      dispatch(deleteItem(dish.id));
    }
  };
  return (
    <div className="sm:w-[290px] w-[90vw]  rounded-md overflow-hidden cursor-pointer shadow-md relative">
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

          {cartItem ? (
            <div className="flex gap-2 px-2 py-1 bg-[#fc8019] text-white rounded-md">
              <button onClick={handleIncrement}>
                <AddCircleOutline />
              </button>
              <p className="w-[22px] text-center font-bold">
                {cartItem.quantity}
              </p>
              <button onClick={handleDecrement}>
                <RemoveCircleOutline />
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="bg-[#FC8019] text-sm font-semibold text-white rounded-md p-2 hover:scale-105 transition-all"
            >
              Add to cart
            </button>
          )}
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
