// src/pages/ProductDetail.jsx
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/books/${id}`)
      .then(res => setBook(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!book) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Autor: {book.author}</p>
      <p>Precio: {book.price}€</p>
      <p>{book.description}</p>
      <button onClick={() => addToCart(book)}>Añadir al carrito</button>
    </div>
  );
};

export default ProductDetail;
