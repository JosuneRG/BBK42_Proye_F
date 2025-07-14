// src/components/Header.jsx
import { Link } from 'react-router-dom';
import "../styles/global.scss"; 
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <Link to="/">📚 BookStore</Link>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/cart">Carrito</Link>
        {user ? (
          <>
            <Link to="/profile">Perfil</Link>
            <button onClick={logout}>Salir</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Registro</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
