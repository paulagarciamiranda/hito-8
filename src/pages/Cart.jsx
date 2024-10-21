import React, { useState } from "react";
import { pizzaCart } from "../pizzas";
import { Button } from "react-bootstrap";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  // aumentar la cantidad del mismo producto:
  const increaseQuantity = (id) => {
    setCart(
      cart.map((pizza) =>
        pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
      )
    );
  };

  // disminuir la cantidad del mismo producto y lo elimina si es 0:
  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((pizza) =>
          pizza.id === id ? { ...pizza, quantity: pizza.quantity - 1 } : pizza
        )
        .filter((pizza) => pizza.quantity > 0)
    );
  };

  // Calcular el total de la compra:
  const total = cart.reduce(
    (sum, pizza) => sum + pizza.price * pizza.quantity,
    0
  );

  return (
    <div className="cart" style={{ margin: "24px"}}>
      <h1 style={{ margin: "24px" }}>Carrito de Compras</h1>
      <ul>
        {cart.map((pizza) => (
          <li key={pizza.id}>
            <img src={pizza.image} alt={pizza.name} style={styles.image} />
            <h2>{pizza.name}</h2>
            <p>Precio: {pizza.price} CLP</p>
            <p>Cantidad: {pizza.quantity}</p>
            <button onClick={() => increaseQuantity(pizza.id)}>+</button>
            <button onClick={() => decreaseQuantity(pizza.id)}>-</button>
          </li>
        ))}
      </ul>
      <h2>Total: {total} CLP</h2>
      <Button variant="dark">Pagar</Button>
    </div>
  );
};

const styles = {
  image: {
    width: "auto",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px 8px 0px 0px",
  },
};

export default Cart;
