import "../styles/Footer.scss";    
import "../styles/BookCard.scss";

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} BookStore. Todos los derechos reservados.</p>
  </footer>
);

export default Footer;
