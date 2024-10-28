import { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; 

//cCrea el contexto del carrito
const CartContext = createContext();

// acceder al contexto
export const useCart = () => useContext(CartContext);

// proveedor del carrito
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);


  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const pizzaInCart = prevCart.find((item) => item.id === pizza.id);

      if (pizzaInCart) {

        return prevCart.map((item) =>
          item.id === pizza.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {

        return [
          ...prevCart,
          { ...pizza, quantity: 1, uuid: uuidv4() }
        ];
      }
    });
  };

  //incrementar la cantidad de un producto en el carrito
  const incrementPizza = (pizzaId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === pizzaId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // decrementar la cantidad de un producto en el carrito
  const decrementPizza = (pizzaId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === pizzaId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // calcula el total 
  useEffect(() => {
    const newTotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, total, addToCart, incrementPizza, decrementPizza }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;