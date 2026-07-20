import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState(0);

  // Form Submission Event Interceptor
  const handleSubmit = (e) => {
    e.preventDefault(); // Stop native page reload sequence
    
    const inrAmount = Number(rupees);
    if (isNaN(inrAmount) || inrAmount <= 0) {
      alert("Please enter a valid amount in Indian Rupees.");
      return;
    }

    // Conversion logic calculation (approximate exchange rate baseline: 1 EUR = 90 INR)
    const convertedValue = (inrAmount / 90).toFixed(2);
    setEuros(convertedValue);
  };

  const formBoxStyle = {
    border: '1px solid #dcdde1',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    maxWidth: '500px',
    margin: '20px auto',
    textAlign: 'left',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <div style={formBoxStyle}>
      <h3 style={{ color: '#2c3e50', borderBottom: '2px solid #27ae60', paddingBottom: '8px', marginTop: '0' }}>
        Part 2: Currency Converter System (Form Event Handling)
      </h3>
      
      <form onSubmit={handleSubmit} style={{ marginTop: '15px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Enter Amount in Indian Rupees (INR):
          </label>
          <input 
            type="number" 
            placeholder="e.g. 4500" 
            value={rupees} 
            onChange={(e) => setRupees(e.target.value)}
            style={{ padding: '8px', width: '90%', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        
        <button 
          type="submit" 
          style={{
            padding: '10px 20px',
            backgroundColor: '#27ae60',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
          Convert to Euro (€)
        </button>
      </form>

      {euros > 0 && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#e8f8f5', borderRadius: '4px' }}>
          <p style={{ margin: 0, fontSize: '1.1em', color: '#117a65' }}>
            Equivalent Value: <strong>€ {euros} Euro</strong>
          </p>
          <small style={{ color: '#7f8c8d' }}>Calculated at standard corporate evaluation rate (1 EUR ≈ 90 INR)</small>
        </div>
      )}
    </div>
  );
}

export default CurrencyConvertor;