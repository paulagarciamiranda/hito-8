import React from "react";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validarDatos = (e) => {
    e.preventDefault();

    setError(""); // para limpiar error al iniciar validación
    setSuccess(""); // para limpiar mensaje de éxito

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // para validar un formato de email

    if (!email.trim() || !password.trim()) {
      setError("Todos los campos son obligatorios");
      return;
    }
    if (!emailRegex.test(email.trim())) {
      setError(
        "Por favor ingresa un email válido (debe contener '@' y un dominio)"
      );
      return;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    setSuccess("¡Has iniciado sesión correctamente!");
    setError("");

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login" style={{ minHeight:"68vh" }}>
      <h1>Login</h1>
      <form className="formulario" onSubmit={validarDatos}>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "24px" }}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
