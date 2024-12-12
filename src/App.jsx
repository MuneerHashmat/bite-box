import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import CheckOut from "./pages/CheckOut";
import GetApp from "./pages/GetApp";
import ChatBot from "./pages/ChatBot";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import NavbarLayout from "./layout/NavbarLayout";

function App() {
  const user = useSelector((state) => state.user);
  return (
    <>
      <Toaster />
      <Router>
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
      </Router>
    </>
  );
}

export default App;
