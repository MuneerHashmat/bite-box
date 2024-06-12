import assets from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import app from "../Firebase/firebaseConfig";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";
import { addUser } from "../reducers/userSlice";
import { BeatLoader } from "react-spinners";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signUpHandler = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      toast.error("password should be at least 8 characters", {
        duration: 2000,
      });
      return;
    }
    const auth = getAuth(app);
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      const uid = response.user.uid;
      const user = { name: name, email: email, password: password };
      localStorage.setItem(uid, JSON.stringify(user));
      dispatch(addUser(user));
      toast.success("sign up successful", { duration: 1500 });
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        toast.error("Email already in use!", { duration: 2000 });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        className="w-screen h-[100vh] flex justify-center items-center"
        style={{
          background:
            "linear-gradient(177deg, rgba(252,128,25,1) 6%, rgba(255,85,52,1) 82%)",
        }}
      >
        <div className="md:w-[400px] w-[90vw]  flex flex-col gap-3 items-center bg-white rounded-md shadow-customShadow">
          <img src={assets.main_logo} alt="logo" className="w-[150px] mt-3" />
          <h1 className="font-semibold text-2xl mt-5">
            Looks like you&apos;re new here
          </h1>
          <form
            onSubmit={signUpHandler}
            className="w-full px-5 py-5 flex flex-col gap-5"
          >
            <div className="flex flex-col items-start w-full">
              <label className=" text-right">Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="p-1 outline-[#fc8019] border border-gray-400 w-full"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-right">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-1 outline-[#fc8019] border border-gray-400 w-full"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-right">Password:</label>
              <input
                type="password"
                value={password}
                placeholder="min 8 characters"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="p-1 outline-[#fc8019] border border-gray-400 w-full"
              />
            </div>

            <button className="bg-[#fc8019] px-3 py-[6px] text-white hover:scale-[1.01] transition-all">
              {loading ? <BeatLoader color="white" /> : "Sign Up"}
            </button>

            <p className="text-center">
              Already have an account?{" "}
              <Link to={"/login"}>
                <span className="text-[#fc8019] underline">Sign In</span>{" "}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
