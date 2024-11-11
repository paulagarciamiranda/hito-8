import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {

      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: 'test@test.com',
          password: '123123',
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      // Convertir la respuesta a JSON
      const data = await response.json();
      console.log("Login exitoso:", data);
      console.log("emil:", data.email);
      console.log("token:", data.token);

      setEmail(data.email);
      setToken(data.token); // Llama a getProfile después de login*/
      navigate("/profile"); // Redirige a la página de perfil
    } catch (error) {
      console.error("Error en login:", error);
    }
  };

  const register = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", {
        email,
        password,
      });
      setToken(response.data.token);
      setEmail(response.data.email);
      navigate("/profile"); // Redirige a la página de perfil
    } catch (error) {
      console.error("Error en register:", error);
    }
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
  };

  const getProfile = async (token) => {
    try {
      const response = await axios.get("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setEmail(response.data.email);
    } catch (error) {
      console.error("Error obteniendo perfil:", error);
    }
  };

  return (
    <UserContext.Provider value={{ token, email, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;