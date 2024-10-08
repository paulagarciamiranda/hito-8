import React from "react";
import { Button, Card } from "react-bootstrap";

const CardPizza = ({ pizza }) => {
  const formattedPrice = pizza.price.toLocaleString("es-CL");
  return (
    <>
      <Card style={{ height: "100%"}}>
        <Card.Img 
          variant="top" 
          src={pizza.image} 
          className="card-img-top" 
          alt={pizza.name} 
          style={styles.image} 
        />
        <Card.Body>
          <h2 style={{ margin: "24px" }}>{pizza.name}</h2>
          <div style={{ borderTop: "1px solid grey", borderBottom: "1px solid grey" }}>
            <h5 style={{ marginTop: "16px" }}>Ingredientes:</h5>
            <div style={{ display: "flex", justifyContent: "center", margin: "8px" }}>
              <ul style={{ listStyle: "none", display: "flex", gap: "8px", padding: "0px" }}>
                {pizza.ingredients.map((ingredient, index) => (
                  <li key={index} style={{ fontSize: "12px", fontWeight: "400" }}>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p style={{ fontSize: "20px", fontWeight: "500", margin: "16px" }}>
            Precio: ${formattedPrice}
          </p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button variant="outline-dark">Ver más 👀</Button>
            <Button variant="dark">Añadir 🛒</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

const styles = {
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px 8px 0px 0px",
  },
};

export default CardPizza;
