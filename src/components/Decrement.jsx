import React from "react";
import { useCart } from "../context/CartContext";
import { Button } from "react-bootstrap";

const DecrementButton = ({ productId }) => {
  const { removeFromCart } = useCart();

  return (
    <Button onClick={() => removeFromCart(productId)} variant="dark" style={{ borderRadius: "100%", height: "36px", width: "36px" }}>
      -
    </Button>
  );
};

export default DecrementButton;