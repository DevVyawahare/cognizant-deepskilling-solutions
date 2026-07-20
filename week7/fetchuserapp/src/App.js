import React from 'react';
import './App.css';
import Getuser from './Components/Getuser';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#f1f5f9', minHeight: '100vh', paddingTop: '40px' }}>
      <header style={{ textAlign: 'center' }}>
        <h1 style={{ color: '#1e293b', margin: '0' }}>REST API Orchestration Panel</h1>
        <p style={{ color: '#64748b', margin: '5px 0 0 0' }}>Asynchronous Lifecycle Content Consumer</p>
      </header>
      <hr style={{ width: '65%', borderColor: '#cbd5e1', marginTop: '20px' }} />
      
      <main>
        <Getuser />
      </main>
    </div>
  );
}

export default App;