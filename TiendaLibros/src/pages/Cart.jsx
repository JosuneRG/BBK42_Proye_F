// src/pages/Cart.jsx
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import axios from 'axios';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const handleOrder = async () => {
    const token = localStorage.getItem('token');
    try {
      await axios.post('http://localhost:3000/api/orders', {
        items: cart.map(book => ({ bookId: book.id, quantity: 1 })),
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Pedido creado con éxito');
    } catch (err) {
      alert('Error al crear pedido');
    }
  };

  return (
    <div>
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.title} - {item.price}€
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleOrder} disabled={cart.length === 0}>
        Realizar Pedido
      </button>
    </div>
  );
};

export default Cart;
