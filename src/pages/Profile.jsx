import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Profile() {
  const { email, getProfile, token } = useContext(UserContext);

  useEffect(() => {
    if (token) {
    /*   getProfile(token);  */// Llama a getProfile si el usuario tiene un token
    }
  }, [token, getProfile]);

  return (
    <div style={{ minHeight: "68vh" }}>
      <h1>Perfil</h1>
      <h3>Bienvenid@</h3>
      <p>Email: {email || "No disponible"}</p>
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