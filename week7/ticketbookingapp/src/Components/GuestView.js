import React from 'react';

function GuestView() {
  const flights = [
    { id: 'AI-101', route: 'Delhi (DEL) ➔ Mumbai (BOM)', time: '08:00 AM', price: '₹5,500' },
    { id: '6E-502', route: 'Bengaluru (BLR) ➔ Indore (IDR)', time: '11:30 AM', price: '₹4,200' },
    { id: 'SG-309', route: 'Bhopal (BHO) ➔ Chennai (MAA)', time: '04:15 PM', price: '₹6,100' }
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #dee2e6' }}>
      <h3 style={{ color: '#7f8c8d' }}>Welcome, Guest Explorer</h3>
      <p style={{ color: '#e67e22', fontWeight: 'bold' }}>⚠️ Please log in to your account to book tickets.</p>
      
      <h4>Available Schedules (Read-Only Mode)</h4>
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff' }}>
        <thead>
          <tr style={{ backgroundColor: '#eaeded' }}>
            <th>Flight ID</th>
            <th>Route Path</th>
            <th>Departure</th>
            <th>Standard Fare</th>
          </tr>
        </thead>
        <tbody>
          {flights.map(f => (
            <tr key={f.id}>
              <td><strong>{f.id}</strong></td>
              <td>{f.route}</td>
              <td>{f.time}</td>
              <td>{f.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GuestView;