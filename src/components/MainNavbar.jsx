import React, { useContext } from "react";
import { useCart } from "../context/CartContext";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Button } from "react-bootstrap";

const MainNavbar = () => {
  const { total } = useCart();
  const { token, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const activeClass = ({ isActive }) => (isActive ? "active" : "navlink-dark");

  return (
    <div
      style={{
        margin: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "10vh",
      }}
    >
      <div style={{ display: "flex", gap: "12px" }}>
        <h3>Pizzería Mamma mía!</h3>
        <NavLink to="/" className={activeClass}>
          🍕 Home
        </NavLink>

        {token ? (
          <>
            <NavLink to="/profile" className={activeClass}>
              👤 Profile
            </NavLink>
            <button
              onClick={() => {
                logout();
                navigate("/logout");
              }}
              className="navlink-dark"
            >
              🚪 Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className={activeClass}>
              🔑 Login
            </NavLink>
            <NavLink to="/register" className={activeClass}>
              ✏️ Register
            </NavLink>
          </>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <NavLink to="/cart" className={activeClass}>
          💰 Total: ${total}
        </NavLink>
      </div>
    </div>
  );
};

export default MainNavbar;
