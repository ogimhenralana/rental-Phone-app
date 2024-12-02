import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Renter() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/phones').then((res) => setPhones(res.data));
  }, []);

  return (
    <div>
      <h1>Available Phones</h1>
      <ul>
        {phones.map((phone) => (
          <li key={phone.id}>
            {phone.model} - ${phone.pricePerHour}/hour or ${phone.pricePerDay}/day{' '}
            {phone.available ? <button>Rent</button> : <span>Not Available</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
