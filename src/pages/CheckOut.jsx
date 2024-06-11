import assets from "../assets/assets";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetCart } from "../reducers/cartSlice";
import { useState } from "react";

const CheckOut = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [name, setName] = useState(user.userData.name || "");
  const [email, setEmail] = useState(user.userData.email || "");
  const [address, setAddress] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const totalPrice =
    cartItems.reduce((value, item) => {
      return value + item.price * item.quantity;
    }, 0) + 25;
  const amount = totalPrice * 100;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handlePayment();
  };

  const handlePayment = () => {
    const options = {
      key: "rzp_test_3dWNQviGU2CH6t",
      amount: amount,
      currency: "INR",
      name: "Bite Box",
      description: "Place Order",
      image: `${assets.logo3}`,
      handler: (response) => {
        console.log(response);
        setName("");
        setEmail("");
        setAddress("");
        setPhoneNo("");
        setPinCode("");
        dispatch(resetCart());
        navigate("/cart", { state: { from: "/checkout" } });
      },
      prefill: {
        name: `${name}`,
        email: `${email}`,
        contact: `${phoneNo}`,
      },
      notes: {
        address: `${address + ", " + pinCode}`,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div
      className="w-screen h-screen flex justify-center items-center"
      style={{
        background:
          "linear-gradient(177deg, rgba(252,128,25,1) 6%, rgba(255,85,52,1) 82%)",
      }}
    >
      <div className="md:w-[500px] w-[90vw] py-2 flex flex-col gap-3 items-center bg-white rounded-md shadow-customShadow relative">
        <button
          onClick={() => navigate("/cart")}
          className="p-1 bg-[#fc8019] rounded-full text-white absolute top-1 right-2"
        >
          <ArrowBack />
        </button>
        <img src={assets.main_logo} alt="logo" className="w-[170px]" />
        <h1 className="font-semibold text-xl text-center px-2">
          set your spot for the feast!
        </h1>
        <form
          onSubmit={handleOnSubmit}
          className="w-full px-5 py-2 flex flex-col gap-3"
        >
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex flex-col items-start sm:w-[40%]">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="p-1 outline-[#fc8019] border border-gray-400 w-full"
              />
            </div>

            <div className="flex flex-col items-start sm:w-[60%]">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-1 outline-[#fc8019] border border-gray-400 w-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-start">
            <textarea
              required
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="p-1 outline-[#fc8019] border border-gray-400 w-full"
            ></textarea>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col items-start">
              <input
                type="number"
                placeholder="pincode"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                required
                className="p-1 outline-[#fc8019] border border-gray-400 w-full"
              />
            </div>

            <div className="flex flex-col items-start">
              <input
                type="number"
                placeholder="phone no."
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                required
                className="p-1 outline-[#fc8019] border border-gray-400 w-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-start">
            <input
              type="text"
              placeholder="how to reach / landmark (optional)"
              className="p-1 outline-[#fc8019] border border-gray-400 w-full"
            />
          </div>

          <div className="flex justify-between items-center bg-white px-2 py-3 border border-gray-400 mt-6">
            <div className="flex gap-4 items-center">
              <img src={assets.payment} alt="payment" className="w-[40px]" />
              <p className="text-gray- text-lg font-sans font-bold flex items-center gap-1">
                <span> &#8377;{totalPrice}.00 </span>
                <span className="text-xs font-normal"> incl. taxes</span>
              </p>
            </div>

            <button className="px-2 py-1 text-md sm:text-lg bg-[#fc8019] text-white rounded-md hover:scale-[1.01] transition-all">
              Pay now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
