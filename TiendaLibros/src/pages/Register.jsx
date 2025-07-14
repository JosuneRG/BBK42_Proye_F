// src/pages/Register.jsx
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.scss';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/auth/register', form);
      navigate('/login');
    } catch (err) {
      alert('Error en el registro');
    }
  };

  return (
    <div className="register-container">
    <h2>Crear Cuenta</h2>
    <form>
      <label>Nombre completo</label>
      <input type="text" placeholder="Tu nombre" />

      <label>Email</label>
      <input type="email" placeholder="usuario@example.com" />

      <label>Contraseña</label>
      <input type="password" placeholder="********" />

      <label>Confirmar contraseña</label>
      <input type="password" placeholder="********" />

      <button type="submit">Registrarse</button>
    </form>
    <div className="login-link">¿Ya tienes cuenta? Inicia sesión</div>
    </div>

  );
};

export default Register;
