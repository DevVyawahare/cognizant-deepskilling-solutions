import React, { useState } from 'react';

function ComplaintRegister() {

  const [employeeName, setEmployeeName] = useState('');
  const [complaintText, setComplaintText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!employeeName.trim() || !complaintText.trim()) {
      alert('Please fill out both the Employee Name and the Complaint description field.');
      return;
    }

    const referenceNumber = Math.floor(100000 + Math.random() * 900000);

    alert(`Thanks ${employeeName}!\nYour complaint has been successfully registered.\nReference Number: ${referenceNumber}`);

    setEmployeeName('');
    setComplaintText('');
  };

  const containerStyle = {
    maxWidth: '500px',
    margin: '40px auto',
    padding: '25px',
    border: '1px solid #cbd5e1',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'left'
  };

  const labelStyle = {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '6px',
    color: '#34495e'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '6px',
    border: '1px solid #cbd5e1',
    boxSizing: 'border-box',
    fontSize: '1em'
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #e74c3c', paddingBottom: '8px', marginTop: '0', textAlign: 'center' }}>
        Grievance & Complaint Portal
      </h2>
      
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <div>
          <label style={labelStyle}>Employee Name:</label>
          <input 
            type="text" 
            placeholder="Enter your full name"
            value={employeeName} 
            onChange={(e) => setEmployeeName(e.target.value)} 
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Complaint Details:</label>
          <textarea 
            rows="5" 
            placeholder="Describe the issue or grievance in detail..."
            value={complaintText} 
            onChange={(e) => setComplaintText(e.target.value)} 
            style={{ ...inputStyle, resize: 'vertical' }}
          />
        </div>

        <button 
          type="submit" 
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            fontSize: '1.05em',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}>
          Submit Ticket
        </button>
      </form>
    </div>
  );
}

export default ComplaintRegister;