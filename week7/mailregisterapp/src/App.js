import React from 'react';
import './App.css';
import Register from './Components/Register';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#f1f5f9', minHeight: '100vh', paddingTop: '40px' }}>
      <header style={{ textAlign: 'center' }}>
        <h1 style={{ color: '#1e293b', margin: '0' }}>Apps Centric Security Core</h1>
        <p style={{ color: '#64748b', margin: '5px 0 0 0' }}>User Access Management Registry Console</p>
      </header>
      <hr style={{ width: '70%', borderColor: '#cbd5e1', marginTop: '20px', marginBottom: '10px' }} />
      
      <main>
        <Register />
      </main>
    </div>
  );
}

export default App;