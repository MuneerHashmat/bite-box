import assets from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import app from "../Firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
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
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

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
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      const uid = response.user.uid;
      const user = { name: name, email: email };
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
  //photoURL

  const continueWithGoogleHandler = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(token);
      const user = result.user;
      console.log(user);
      const newUser = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      };
      localStorage.setItem(user.uid, JSON.stringify(newUser));
      dispatch(addUser(newUser));
      toast.success("sign up successful", { duration: 1500 });
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (e) {
      const errorCode = e.code;
      toast.error(errorCode, { duration: 1500 });
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
        <div className="sm:w-[400px] w-[90vw]  flex flex-col gap-3 items-center bg-white rounded-md shadow-customShadow">
          <img src={assets.main_logo} alt="logo" className="w-[150px] mt-3" />
          <h1 className="font-semibold text-xl">
            Looks like you&apos;re new here
          </h1>
          <div className="w-full">
            <form
              onSubmit={signUpHandler}
              className="w-full px-5 flex flex-col gap-5"
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
          <div className="w-full px-5 py-1 flex flex-col items-center gap-3 mb-3">
            <div className="flex items-center w-full">
              <div className="grow border border-gray-300"></div>
              <span className="mx-2">Or</span>
              <div className="grow border border-gray-300"></div>
            </div>
            <button
              onClick={continueWithGoogleHandler}
              className="flex gap-2 w-full justify-center border border-gray-400 py-2 shadow-md hover:scale-[1.01] transition-all"
            >
              <img src={assets.google} className="w-[24px]" />
              <span>Continue with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
