import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Admin() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/phones').then((res) => setPhones(res.data));
  }, []);

  const toggleAvailability = (id, available) => {
    axios.put(`http://localhost:3000/phones/${id}`, { available }).then(() => {
      setPhones((prev) =>
        prev.map((phone) => (phone.id === id ? { ...phone, available } : phone)),
      );
    });
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <ul>
        {phones.map((phone) => (
          <li key={phone.id}>
            {phone.model} - {phone.available ? 'Available' : 'Not Available'}{' '}
            <button onClick={() => toggleAvailability(phone.id, !phone.available)}>
              Toggle Availability
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
