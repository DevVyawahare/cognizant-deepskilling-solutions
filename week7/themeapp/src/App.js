import React, { useState } from 'react';
import './App.css';
import EmployeeList from './Components/EmployeeList';
import ThemeContext from './Context/ThemeContext'; // Step 6a: Import ThemeContext

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const mainContainerStyle = {
    maxWidth: '600px',
    margin: '30px auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: theme === 'light' ? '#f8fafc' : '#0f172a',
    color: theme === 'light' ? '#0f172a' : '#f8fafc',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease'
  };

  return (
    // Step 6b & 6c: Define the context provider using the local state value wrapper
    <ThemeContext.Provider value={theme}>
      <div style={mainContainerStyle}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0 }}>Apps Centric Enterprise Portal</h2>
          
          <button 
            onClick={toggleTheme}
            style={{
              padding: '8px 16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              borderRadius: '6px',
              border: '1px solid #ccc',
              backgroundColor: theme === 'light' ? '#1e293b' : '#ffffff',
              color: theme === 'light' ? '#ffffff' : '#1e293b'
            }}>
            Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
        </header>
        
        {/* Step 6d: Modify call to EmployeeList so theme parameters are omitted */}
        <main>
          <EmployeeList />
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;