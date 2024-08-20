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
import Layout from "./layout/Layout";

function App() {
  const user = useSelector((state) => state.user);
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/cart"
            element={
              user.active ? (
                <Layout>
                  <Cart />
                </Layout>
              ) : (
                <Navigate to={"/login"} />
              )
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route
            path="/getapp"
            element={
              <Layout>
                <GetApp />
              </Layout>
            }
          />
          <Route
            path="/chatbot"
            element={
              <Layout>
                <ChatBot />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
