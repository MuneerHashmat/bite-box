import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import CheckOut from "./pages/CheckOut";
import GetApp from "./pages/GetApp";
import ChatBot from "./pages/ChatBot";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/getapp" element={<GetApp />} />
          <Route path="/chatbot" element={<ChatBot />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
