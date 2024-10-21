import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import notFoundImage from "../assets/img/404.jpg";

function NotFound() {
  return (
    <div style={{ minHeight: "68vh", textAlign:"center" }}>
      <h1>Error 404</h1>
      <img src={notFoundImage} style={{ width: "40%"}} alt="Ilustración de error" />
      <p>La página que buscas no existe.</p>
      <Button variant="dark" to="/" as={Link}>
        🍕 Volver a home
      </Button>
    </div>
  );
}

export default NotFound;
