import React, { useState } from 'react';
import { pizzaCart } from '../pizzas'; // Importa el array de pizzas en el carrito

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  // Función para aumentar la cantidad de una pizza
  const increaseQuantity = (id) => {
    setCart(cart.map(pizza => 
      pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
    ));
  };

  // Función para disminuir la cantidad de una pizza
  const decreaseQuantity = (id) => {
    setCart(cart
      .map(pizza => pizza.id === id ? { ...pizza, quantity: pizza.quantity - 1 } : pizza)
      .filter(pizza => pizza.quantity > 0) // Elimina la pizza si la cantidad es 0
    );
  };

  // Calcular el total de la compra
  const total = cart.reduce((sum, pizza) => sum + pizza.price * pizza.quantity, 0);

  return (
    <div className="cart">
      <h1>Carrito de Compras</h1>
      <ul>
        {cart.map((pizza) => (
          <li key={pizza.id}>
            <img src={pizza.image} alt={pizza.name} />
            <h2>{pizza.name}</h2>
            <p>Precio: {pizza.price} CLP</p>
            <p>Cantidad: {pizza.quantity}</p>
            <button onClick={() => increaseQuantity(pizza.id)}>+</button>
            <button onClick={() => decreaseQuantity(pizza.id)}>-</button>
          </li>
        ))}
      </ul>
      <h2>Total: {total} CLP</h2>
      <button>Pagar</button>
    </div>
  );
};

export default Cart;