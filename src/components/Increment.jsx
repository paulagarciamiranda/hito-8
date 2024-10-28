import { useCart } from "../context/CartContext";
import { Button } from "react-bootstrap";

const Increment = ({ pizzaId }) => {
  const { incrementPizza } = useCart();
  
  return (
    <Button variant="dark" onClick={() => incrementPizza(pizzaId)} style={{ borderRadius: "100%", height: "36px", width: "36px" }}>
      +
    </Button>
  );
};

export default Increment;