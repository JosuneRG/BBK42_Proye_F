// src/pages/Profile.jsx
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:3000/api/orders', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(res.data);
    };

    if (user) fetchOrders();
  }, [user]);

  if (!user) return <p>Cargando...</p>;

  return (
    <div>
      <h2>Perfil</h2>
      <p><strong>Nombre:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <h3>Mis pedidos:</h3>
      <ul>
        {orders.map(order => (
          <li key={order.id}>Pedido #{order.id} - {order.total}€</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
