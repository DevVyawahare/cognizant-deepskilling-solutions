import React from 'react';

function UserView() {
  const handleBooking = (flightId) => {
    alert(`Success! Ticket hold confirmed for flight ${flightId}. A payment gateway receipt has been sent.`);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#e8f8f5', borderRadius: '8px', border: '1px solid #a3e4d7' }}>
      <h3 style={{ color: '#16a085' }}>Welcome Back, Registered Member!</h3>
      <p style={{ color: '#27ae60' }}>🔓 Account Verified: Instant 1-Click Booking is now active.</p>
      
      <h4>Premium Booking Dashboard</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', backgroundColor: '#fff', border: '1px solid #cbd5e1', borderRadius: '6px' }}>
          <div>
            <strong>Flight AI-101</strong> — Delhi (DEL) ➔ Mumbai (BOM) <br />
            <small>Departure: 08:00 AM | Fare: ₹5,500</small>
          </div>
          <button onClick={() => handleBooking('AI-101')} style={{ backgroundColor: '#2ecc71', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Book Ticket</button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', backgroundColor: '#fff', border: '1px solid #cbd5e1', borderRadius: '6px' }}>
          <div>
            <strong>Flight 6E-502</strong> — Bengaluru (BLR) ➔ Indore (IDR) <br />
            <small>Departure: 11:30 AM | Fare: ₹4,200</small>
          </div>
          <button onClick={() => handleBooking('6E-502')} style={{ backgroundColor: '#2ecc71', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Book Ticket</button>
        </div>
      </div>
    </div>
  );
}

export default UserView;
