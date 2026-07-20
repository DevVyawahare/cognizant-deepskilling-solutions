import React, { useState } from 'react';
import './App.css';
import ListofPlayers from './Components/ListofPlayers';
import IndianPlayers from './Components/IndianPlayers';

function App() {
  // Change this flag variable between true and false to view the respective components
  const [flag, setFlag] = useState(true);

  return (
    <div className="App" style={{ textAlign: 'center', padding: '20px' }}>
      <h1>BCCI National Player Management System</h1>
      
      {/* Interactive Toggle Utility Button to easily preview both states */}
      <div style={{ margin: '20px' }}>
        <button 
          onClick={() => setFlag(!flag)} 
          style={{
            padding: '10px 20px',
            fontSize: '1em',
            fontWeight: 'bold',
            backgroundColor: '#34495e',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
          Toggle Roster View (Current Flag: {flag.toString()})
        </button>
      </div>
      <hr style={{ width: '80%', marginBottom: '20px' }} />

      {/* Conditional Rendering using a simple if/else expression evaluation */}
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;