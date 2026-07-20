import React, { useState } from 'react';
import './App.css';
import GuestView from './Components/GuestView';
import UserView from './Components/UserView';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App" style={{ maxWidth: '800px', margin: '0 auto', padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #34495e', paddingBottom: '15px', marginBottom: '25px' }}>
        <h1 style={{ margin: 0, color: '#2c3e50', fontSize: '1.8em' }}>AirLine Passenger Booking Terminal</h1>
        
        {/* Dynamic Element Button Swap */}
        {isLoggedIn ? (
          <button 
            onClick={() => setIsLoggedIn(false)} 
            style={{ padding: '10px 20px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
            Logout
          </button>
        ) : (
          <button 
            onClick={() => setIsLoggedIn(true)} 
            style={{ padding: '10px 20px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
            Login
          </button>
        )}
      </header>

      {/* Conditional Rendering Logic Evaluation */}
      <main>
        {isLoggedIn ? <UserView /> : <GuestView />}
      </main>
    </div>
  );
}

export default App;