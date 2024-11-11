import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

function Register() {
  const { register } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passconfirm, setPassconfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validarDatos = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !password || !passconfirm) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (password !== passconfirm) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      await register({ email, password });
      setSuccess("Tu cuenta se ha creado con éxito");
      setEmail("");
      setPassword("");
      setPassconfirm("");
    } catch (error) {
      setError("Error al registrarse. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="registro" style={{ minHeight: "68vh" }}>
      <h1>Crea tu cuenta</h1>
      <form className="formulario" onSubmit={validarDatos}>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
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
          <label>Confirmar Contraseña</label>
          <input
            type="password"
            onChange={(e) => setPassconfirm(e.target.value)}
            value={passconfirm}
          />
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;