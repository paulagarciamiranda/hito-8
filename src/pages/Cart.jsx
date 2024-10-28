import { useCart } from "../context/CartContext";
import { Button } from "react-bootstrap";

const Cart = () => {
  const { cart, total, incrementPizza, decrementPizza } = useCart();

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul style={{ listStyle: "none" }}>
        {cart.map((pizza) => (
          <li key={pizza.uuid}>
            <img
              src={pizza.img}
              alt={pizza.name}
              style={{ width: "100px" }}
            />
            <h2>{pizza.name}</h2>
            <p>Precio: {pizza.price} CLP</p>
            <p>Cantidad: {pizza.quantity}</p>
            <div style={{ display: "flex", gap: "8px" }}>
              <button onClick={() => incrementPizza(pizza.id)}>+</button>
              <button onClick={() => decrementPizza(pizza.id)}>-</button>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
      <Button variant="dark">Pagar</Button>
    </div>
  );
};

export default Cart;
