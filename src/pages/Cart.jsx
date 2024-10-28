import React from "react";
import { useCart } from "../context/CartContext";
import Increment from "../components/Increment";
import Decrement from "../components/Decrement";
import { Button } from "react-bootstrap";
import { pizzaCart } from "../pizzas";

const Cart = () => {
  const { cart, total } = useCart();

  return (
    <div className="cart">
      <h1>Carrito de Compras</h1>
      <ul>
        {pizzaCart.map((pizza) => (
          <li key={pizza.id}>
            <img src={pizza.image} alt={pizza.name} style={{ width: "100px" }} />
            <h2>{pizza.name}</h2>
            <p>Precio: {pizza.price} CLP</p>
            <p>Cantidad: {pizza.quantity}</p>
            <div style={{ display: "flex", gap: "8px" }}>
            <Increment cart={cart} />
            <Decrement pizzaId={pizza.id} />
            </div>
          </li>
        ))}
      </ul>
      <h2>Total: {total} CLP</h2>
      <Button variant="dark">Pagar</Button>
    </div>
  );
};

export default Cart;