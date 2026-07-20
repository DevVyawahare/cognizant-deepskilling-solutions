import React from 'react';
import './App.css';
import EventTester from './Components/EventTester';
import CurrencyConvertor from './Components/CurrencyConvertor';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#f5f6fa', minHeight: '100vh', paddingTop: '30px' }}>
      <header style={{ textAlign: 'center' }}>
        <h1 style={{ color: '#2c3e50', margin: '0' }}>React Advanced Event Handling Terminal</h1>
        <p style={{ color: '#7f8c8d', margin: '5px 0 20px 0' }}>Week 6 Event Lifecycle & Synthetic Engine Integration</p>
      </header>
      <hr style={{ width: '80%', marginBottom: '20px' }} />
      
      <main>
        <EventTester />
        <CurrencyConvertor />
      </main>
    </div>
  );
}

export default App;