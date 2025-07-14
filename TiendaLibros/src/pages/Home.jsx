// src/pages/Home.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';
import '../styles/Home.scss';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/books') // Reemplaza con tu endpoint real
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="home">
      <h2>Libros disponibles</h2>
      <div className="book-list">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
