import React from "react";
import { useState } from "react";


function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passconfrirm, setPassconfrirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validarDatos = (e) => {
    e.preventDefault();

    setError(""); 
    setSuccess(""); 

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (!email.trim() || !password.trim() || !passconfrirm.trim()) {
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

    if (password !== passconfrirm) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setSuccess("Tu cuenta se ha creado con éxito");
    setError("");

    setEmail("");
    setPassword("");
    setPassconfrirm("");
  };

  return (
    <div className="registro" style={{ minHeight:"68vh" }}>
      <h1>Crea tu cuenta</h1>
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
          <p style={{ fontSize: "12px", marginBottom: "4px" }}>
            Debe contener 6 caracteres como mínimo
          </p>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <label>Confirmar Contraseña</label>
          <input
            type="password"
            name="passconfrirm"
            className="form-control"
            onChange={(e) => setPassconfrirm(e.target.value)}
            value={passconfrirm}
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

export default Register;
