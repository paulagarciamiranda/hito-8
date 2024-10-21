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
import Pizza from "./pages/Pizza";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
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
  
      {/*       <div className="ambos-formularios">
        <Register />
        <Login />
      </div> */}
      {/* <Cart /> */}
      {/* <Pizza /> */}
      <Footer />
    </>
  );
}

export default App;
