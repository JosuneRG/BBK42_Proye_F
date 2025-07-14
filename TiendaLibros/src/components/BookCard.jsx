// src/components/BookCard.jsx
import { Link } from 'react-router-dom';
import "../styles/BookCard.scss";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.cover || '/placeholder.jpg'} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.price}€</p>
      <Link to={`/product/${book.id}`}>Ver más</Link>
    </div>
  );
};

export default BookCard;
