import React from "react";
import { useCart } from "../context/CartContext";
import { Button } from "react-bootstrap";

const Increment = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Button onClick={() => addToCart(product)} variant="dark" style={{ borderRadius: "100%", height: "36px", width: "36px" }}>
      +
    </Button>
  );
};

export default Increment;