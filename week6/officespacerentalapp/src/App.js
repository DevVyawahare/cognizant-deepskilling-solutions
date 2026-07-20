import React from 'react';
import './App.css';
import OfficeSpaces from './Components/OfficeSpaces';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#f5f7fa', minHeight: '100vh', paddingTop: '30px' }}>
      <header style={{ textAlign: 'center', marginBottom: '10px' }}>
        <h1 style={{ color: '#2c3e50', margin: '0' }}>Cognizant Smart Workspace Rentals</h1>
        <p style={{ color: '#7f8c8d', margin: '5px 0 0 0' }}>Real-time Corporate Workspace Inventory Tracker</p>
      </header>
      <hr style={{ width: '85%', borderColor: '#bdc3c7' }} />
      <OfficeSpaces />
    </div>
  );
}

export default App;