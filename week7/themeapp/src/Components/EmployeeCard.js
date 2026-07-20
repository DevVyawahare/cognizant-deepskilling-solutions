import React, { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext'; // Step 8a: Import ThemeContext

function EmployeeCard({ id, name, role }) {
  // Step 8b: Retrieve the context data value via modern hook allocation
  const currentTheme = useContext(ThemeContext);

  // Dynamic style parameters built on context values
  const cardStyle = {
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    padding: '15px',
    margin: '10px 0',
    backgroundColor: currentTheme === 'light' ? '#ffffff' : '#334155',
    color: currentTheme === 'light' ? '#1e293b' : '#f8fafc',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    textAlign: 'left'
  };

  const buttonClass = currentTheme === 'light' ? 'btn-light-theme' : 'btn-dark-theme';

  const btnStyle = {
    padding: '6px 12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    backgroundColor: currentTheme === 'light' ? '#3498db' : '#f1c40f',
    color: currentTheme === 'light' ? '#ffffff' : '#1e293b'
  };

  return (
    <div style={cardStyle}>
      <h4 style={{ margin: '0 0 5px 0' }}>{name}</h4>
      <p style={{ margin: '0 0 10px 0', fontSize: '0.9em', opacity: 0.8 }}>ID: {id} | Role: {role}</p>
      
      {/* Step 8c: Apply the conditional styling derived from context value */}
      <button className={buttonClass} style={btnStyle}>
        Manage Profile
      </button>
    </div>
  );
}

export default EmployeeCard;