import { Link } from "react-router-dom";
import assets from "../assets/assets";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../reducers/userSlice";
import toast from "react-hot-toast";
import { BeatLoader } from "react-spinners";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logInHandler = async (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      const uid = response.user.uid;
      const user = JSON.parse(localStorage.getItem(uid));
      dispatch(signIn(user));
      toast.success("sign in successful", { duration: 1500 });
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (e) {
      if (
        e.code === "auth/invalid-credential" ||
        e.code === "auth/invalid-email" ||
        e.code === "auth/missing-email" ||
        e.code === "auth/missing-password"
      ) {
        // Wrong email or password case
        toast.error("Invalid email or password. Please try again.", {
          duration: 2000,
        });
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
          <h1 className="font-semibold text-2xl mt-5">Welcome back!</h1>
          <form
            onSubmit={logInHandler}
            className="w-full px-5 py-5 flex flex-col gap-5"
          >
            <div className="flex flex-col items-start w-full">
              <label className="text-right">Email:</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-1 outline-[#fc8019] border border-gray-400 w-full"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-right">Password:</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="p-1 outline-[#fc8019] border border-gray-400 w-full"
              />
            </div>

            <button className="bg-[#fc8019] px-3 py-[6px] text-white hover:scale-[1.01] transition-all">
              {loading ? <BeatLoader color="white" /> : "Sign In"}
            </button>

            <p className="text-center">
              Don&apos;t have an account?{"  "}
              <Link to={"/signup"}>
                <span className="text-[#fc8019] underline">Sign Up</span>{" "}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
