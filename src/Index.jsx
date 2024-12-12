import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { lazy, Suspense } from "react";
import LazyLoader from "./utils/LazyLoader";

const Cart = lazy(() => import("./pages/Cart"));
const Home = lazy(() => import("./pages/Home"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/Login"));
const CheckOut = lazy(() => import("./pages/CheckOut"));
const GetApp = lazy(() => import("./pages/GetApp"));
const ChatBot = lazy(() => import("./pages/ChatBot"));
const NavbarLayout = lazy(() => import("./layout/NavbarLayout"));

const Index = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      <Toaster />
      <Router>
        <Suspense fallback={<LazyLoader />}>
          <Routes>
            <Route element={<NavbarLayout />}>
              <Route path="/" element={<Home />} />
              <Route
                path="/cart"
                element={user.active ? <Cart /> : <Navigate to={"/login"} />}
              />
              <Route path="/getapp" element={<GetApp />} />
              <Route path="/chatbot" element={<ChatBot />} />
            </Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<CheckOut />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default Index;
