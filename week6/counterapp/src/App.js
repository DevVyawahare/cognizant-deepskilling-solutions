import React from 'react';
import './App.css';
import CountPeople from './Components/CountPeople';

function App() {
  return (
    <div className="App" style={{ textAlign: 'center', paddingTop: '40px' }}>
      <h1>Smart Spaces Management System</h1>
      <hr style={{ width: '60%', marginBottom: '30px' }} />
      <CountPeople />
    </div>
  );
}

export default App;