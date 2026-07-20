import React from 'react';
import './App.css';
import ComplaintRegister from './Components/ComplaintRegister';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#f1f5f9', minHeight: '100vh', paddingTop: '40px' }}>
      <header style={{ textAlign: 'center' }}>
        <h1 style={{ color: '#1e293b', margin: '0' }}>Apps Centric Solutions</h1>
        <p style={{ color: '#64748b', margin: '5px 0 0 0' }}>Internal Technical Helpdesk Management Console</p>
      </header>
      <hr style={{ width: '75%', borderColor: '#cbd5e1', marginTop: '20px' }} />
      
      <main>
        <ComplaintRegister />
      </main>
    </div>
  );
}

export default App;