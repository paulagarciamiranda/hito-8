import { useState, useEffect } from "react";
import Header from "../components/Header";
import { Button } from "react-bootstrap";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  const url = "http://localhost:5000/api/pizzas";

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPizzas(data);
  };

  useEffect(() => {
    getData();
  }, []);

  /* const formattedPrice = pizza.price.toLocaleString("es-CL"); */

  return (
    <>
      {/* <Header /> */}
      <h1 style={{ margin: "24px" }}>Nuestras Pizzas</h1>
      <div className="pizza-cards">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="pizza-card">
            <img src={pizza.img} alt={pizza.name} />
            <h2>{pizza.name}</h2>
            <p>Precio: ${pizza.price}</p>
            <p>Ingredientes: {pizza.ingredients.join(", ")}</p>
            <div className="buttons">
              <Button variant="dark">Añadir 🛒</Button>
              <Button variant="outline-dark">Ver más 👀</Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
