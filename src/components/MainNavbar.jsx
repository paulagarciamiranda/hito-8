import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const MainNavbar = () => {
  const { total } = useCart();
  const token = false;

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
        <Button variant="dark" to="./" as={Link}>
          🍕 Home
        </Button>

        {token ? (
          <>
            <Button variant="dark" to="/profile" as={Link}>
              👤 Profile
            </Button>
            <Button variant="dark" to="/logout" as={Link}>
              🚪 Logout
            </Button>
          </>
        ) : (
          <>
            <Button variant="dark" to="/login" as={Link}>
              🔑 Login
            </Button>
            <Button variant="dark" to="/register" as={Link}>
              ✏️ Register
            </Button>
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
        <Button variant="dark" to="/cart" as={Link}>
          💰 Total: ${total}
        </Button>
      </div>
    </div>
  );
};

export default MainNavbar;
