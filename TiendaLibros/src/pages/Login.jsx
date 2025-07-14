// src/pages/Login.jsx
import { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.scss';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/auth/login', form);
      login(res.data.user); // almacena en contexto
      localStorage.setItem('token', res.data.token);
      navigate('/profile');
    } catch (err) {
      alert('Credenciales incorrectas');
    }
  };

  return (
      <div className="login-container">
        <h2>Iniciar Sesión</h2>
        <form>
          <label>Email</label>
          <input type="email" placeholder="usuario@example.com" />

          <label>Contraseña</label>
          <input type="password" placeholder="********" />

          <button type="submit">Entrar</button>
        </form>
        <div className="forgot-password">¿Olvidaste tu contraseña?</div>
      </div>

  );
};

export default Login;
