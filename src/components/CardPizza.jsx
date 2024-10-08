import React from "react";

/* function CardPizza({ name, price, ingredients, img }) {
  const formattedPrice = price.toLocaleString('es-CL');
  return (
    <div style={styles.card}>
      <img src={img} alt={name} style={styles.image} />
      <h2 style={{ fontSize: "24px", textAlign: "left", margin: "8px 16px" }}>{name}</h2>
      <div
        style={{ borderTop: "1px solid grey", borderBottom: "1px solid grey" }}
      >
        <h3
          style={{
            fontSize: "18px",
            fontWeight: "100",
            display: "flex",
            justifyContent: "center",
            marginTop: "16px",
          }}
        >
          Ingredientes:
        </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "16px",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "8px",
              padding: "0px",
            }}
          >
            {ingredients.map((ingrediente, index) => (
              <li style={{ fontSize: "12px", fontWeight: "400" }} key={index}>
                {ingrediente}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p
        style={{ fontSize: "26px", fontWeight: "500", margin: "24px 0px" }}
      >
        Precio: ${formattedPrice}
      </p>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button style={styles.buttonPrimary}>Ver más 👀</button>
        <button style={styles.buttonSecondary}>Añadir 🛒</button>
      </div>
    </div>
  );
} */
const CardPizza = ({ pizza }) => {
  return (
    <div className="card" style={styles.card}>
      <img src={pizza.image} className="card-img-top" alt={pizza.name} style={styles.image} />
      <h2>{pizza.name}</h2>
      <p>Precio: {pizza.price} CLP</p>
      <h3>Ingredientes:</h3>
      <ul>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button style={styles.buttonPrimary}>Ver más 👀</button>
        <button style={styles.buttonSecondary}>Añadir 🛒</button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    paddingBottom: "16px",
    maxWidth: "600px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100%",
    borderRadius: "8px 8px 0px 0px",
    objectFit: "cover",
  },
  buttonSecondary: {
    height: "30px",
    backgroundColor: "white",
    color: "#242424",
    border: "white 1px solid",
    borderRadius: "4px",
    padding: "0px 10px",
  },
};

export default CardPizza;
