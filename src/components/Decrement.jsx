import { useCart } from "../context/CartContext";
import { Button } from "react-bootstrap";

const Decrement = ({ pizzaId }) => {
  const { decrementPizza } = useCart();
  
  return (
    <Button variant="dark" onClick={() => decrementPizza(pizzaId)} style={{ borderRadius: "100%", height: "36px", width: "36px" }}>
      -
    </Button>
  );
};

export default Decrement;