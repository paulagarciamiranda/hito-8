import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

function Login() {
  const { login, token } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validarDatos = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    try {
      await login({ email, password });
      setEmail("");
      setPassword("");
    } catch (error) {
      setError("Error al iniciar sesión. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="login" style={{ minHeight: "68vh" }}>
      <h1>Login</h1>
      <form className="formulario" onSubmit={validarDatos}>
        {error && <p className="error">{error}</p>}
        {token && (
          <p className="success">{"¡Has iniciado sesión correctamente!"}</p>
        )}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label>Contraseña</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
