import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../pizzas";

/* function Home() {
  const pizzas = [
    {
      name: "Pizza Napolitana",
      price: 5950,
      ingredients: ["🍕 mozzarella,", "tomates,", "jamón,", "orégano"],
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
    },
    {
      name: "Pizza Española",
      price: 6950,
      ingredients: ["🍕 mozzarella,", "gorgonzola,", "parmesano,", "provolone"],
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
    },
    {
      name: "Pizza Peperoni",
      price: 6950,
      ingredients: ["🍕 mozzarella,", "pepperoni,", "orégano"],
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3",
    },
  ];

  return (
    <div>
      <Header />
      <div style={{ display: "flex", margin: "50px 80px", gap: "24px" }}>
        {pizzas.map((pizza) => (
          <CardPizza
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </div>
  );
} */

const Home = () => {
  return (
    <div className="home">
      <h1>Nuestras Pizzas</h1>
      <div className="pizza-list">
        {pizzas.map((pizza) => (
          <CardPizza key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default Home;
