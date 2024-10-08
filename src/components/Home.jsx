import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../pizzas";
import { Row, Col, Container } from "react-bootstrap";

const Home = () => {
  const mapPizzas = pizzas.map((pizza) => {
    return (
      <Col key={pizza.id} xs={12} md={6} lg={4}>
        {" "}
        <CardPizza pizza={pizza} />
      </Col>
    );
  });

  return (
    <>
      {/* <Header /> */}

      <Container fluid>
        <h1 style={{ margin: "24px" }}>Nuestras Pizzas</h1>
        <Row
          className="g-4"
          xs={1}
          md={2}
          lg={4}
          style={{
            height: "auto",
            minHeight: "100%",
            padding: "24px",
            overflow: "visible",
          }}
        >
          {" "}
          {mapPizzas}
        </Row>
      </Container>
    </>
  );
};

export default Home;
