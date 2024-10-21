import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div style={{ minHeight:"68vh" }}>
      <h1>Perfil</h1>
      <h3>Bienvenid@</h3>
      <p>Email: nombre@ejemplo.com</p>
      <ul>
        <li>Datos de envío</li>
        <li>Medios de pago</li>
        <li>Historial de pedidos</li>
        <li>Configuración de la cuenta</li>
      </ul>
      <Button variant="dark" to="/logout" as={Link}>
        🚪 Cerrar sesión
      </Button>
      <Button variant="dark" to="/" as={Link}>
        🍕 Volver a home
      </Button>
    </div>
  );
}
export default Profile;
