import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  
  const url = `http://localhost:5000/api/pizzas/${id}`;

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPizza(data);
  };

  useEffect(() => {
    getData();
  }, [id]);

  if (!pizza) {
    return <div>Loading...</div>;
  }

  const formattedPrice = pizza.price.toLocaleString("es-CL");

  return (
    <div>
      <div key={pizza.id} className="pizza-card">
        <h1>{pizza.name}</h1>
        <img src={pizza.img} alt={pizza.name} />
        <p>Precio: ${formattedPrice}</p>
        <p>Ingredientes: {pizza.ingredients.join(", ")}</p>
        <p>{pizza.description}</p>
        <div className="buttons">
          <Button variant="dark">Añadir 🛒</Button>
          <Link to={"/"}>
              <Button variant="outline-dark">Volver</Button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
