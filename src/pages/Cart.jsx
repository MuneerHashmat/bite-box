import assets from "../assets/assets";
import Navbar from "../components/Navbar";
import Footer from "./../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
  deleteItem,
} from "../reducers/cartSlice";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((value, item) => {
    return value + item.price * item.quantity;
  }, 0);
  const handleIncrement = (item) => {
    dispatch(increaseItemQuantity(item.id));
  };
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(decreaseItemQuantity(item.id));
    } else {
      dispatch(deleteItem(item.id));
    }
  };
  return (
    <div className="pt-24">
      <Navbar />
      <div className="w-[90vw] sm:w-[600px] min-h-[50vh] bg-[#fc8019] mx-auto mt-5 py-3 px-2 overflow-auto relative">
        {cartItems.length == 0 ? (
          <div className="text-white flex flex-col gap-4 items-center">
            <h1 className="font-bold text-2xl">Empty Cart!</h1>
            <div className="p-5 bg-white rounded-full">
              <img src={assets.cart} className="w-[300px]" />
            </div>
            <p className="text-center text-lg">
              Looks Like you haven&apos;t made <br /> your choice yet
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4 mx-auto relative mb-16">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="w-full flex justify-between gap-3 items-center bg-white px-2 py-1 mx-auto"
              >
                <div className="flex gap-2 items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[70px] h-[70px] object-cover rounded-[50%]"
                  />
                  <p className="text-gray-600 text-[1rem] w-[155px] font-bold">
                    {item.name}
                  </p>
                </div>
                <p className="font-sans font-bold text-lg">
                  &#8377;{item.price * item.quantity}
                </p>
                <div className="flex gap-4 items-center">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-1 items-center px-1 py-[2px] bg-[#fc8019] text-white rounded-md">
                      <button onClick={() => handleIncrement(item)}>
                        <AddCircleOutline sx={{ fontSize: "18px" }} />
                      </button>
                      <p className="w-[15px] text-center font-bold">
                        {item.quantity}
                      </p>
                      <button onClick={() => handleDecrement(item)}>
                        <RemoveCircleOutline sx={{ fontSize: "18px" }} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {cartItems.length > 0 ? (
          <div className="sticky bottom-0 bg-white w-full flex justify-between items-center">
            <div className="flex gap-7 items-center">
              <img src={assets.shopping} alt="" className="w-[60px]" />
              <p className="text-xl text-gray-700 font-bold">
                Total:{" "}
                <span className="font-sans text-black">
                  &#8377;{totalPrice}.00
                </span>
              </p>
            </div>
          </div>
        ) : null}
      </div>
      {cartItems.length == 0 ? (
        <div className="w-screen flex items-center justify-center mt-7">
          <button
            onClick={() => navigate("/")}
            className="bg-[#FC8019] text-white rounded-md text-xl px-2 py-1 hover:scale-105 transition-all"
          >
            Go to Home
          </button>
        </div>
      ) : null}
      <Footer />
    </div>
  );
};

export default Cart;
