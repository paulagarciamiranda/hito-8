import React from 'react'
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Logout() {
  return (
    <div style={{ minHeight:"68vh" }}>
        <h1>Logout</h1>
        <p>Has cerrado tu sesión.</p>
        <Button variant="dark" to="/" as={Link}>🍕 Volver a home</Button>
    </div>
  )
}

export default Logout