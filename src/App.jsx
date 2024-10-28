import React from "react";
import MainNavbar from "./components/mainNavbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./pages/Cart";
import Logout from "./pages/Logout";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import { CartProvider } from "./context/CartContext"

function App() {
  return (
    <>
      <CartProvider>
        <MainNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
