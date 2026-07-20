import React, { useState } from 'react';

function Register() {
  // Input tracking states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Validation feedback message tracking state
  const [errors, setErrors] = useState({});

  // Real-time validation handler for structural rules evaluation
  const validateField = (name, value) => {
    let errorMsg = '';
    
    if (name === 'name') {
      // 1. Name validation rule: At least 5 characters
      if (value.trim().length < 5) {
        errorMsg = 'Name must be at least 5 characters long.';
      }
    }
    
    if (name === 'email') {
      // 2. Email validation rule: Check for '@' and '.' signs
      if (!value.includes('@') || !value.includes('.')) {
        errorMsg = 'Email must contain both an "@" symbol and a "." dot extension.';
      }
    }
    
    if (name === 'password') {
      // 3. Password validation rule: At least 8 characters
      if (value.length < 8) {
        errorMsg = 'Password must be at least 8 characters long.';
      }
    }

    return errorMsg;
  };

  // Input change interceptor handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Evaluate validity dynamically as the user types
    const errorMsg = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: errorMsg }));
  };

  // Form submission handler validating final states
  const handleSubmit = (e) => {
    e.preventDefault(); // Halt default HTML form reload cycle

    // Run a final comprehensive check on all fields
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      password: validateField('password', formData.password)
    };

    setErrors(newErrors);

    // If any validation error message string exists, block submission
    if (newErrors.name || newErrors.email || newErrors.password) {
      alert('Form submission blocked. Please resolve the validation errors.');
      return;
    }

    // Success confirmation trigger window
    alert(`Registration Successful!\nWelcome, ${formData.name}.\nYour account has been securely verified.`);
    
    // Clear form inputs cleanly
    setFormData({ name: '', email: '', password: '' });
    setErrors({});
  };

  const formBoxStyle = {
    maxWidth: '450px',
    margin: '30px auto',
    padding: '25px',
    border: '1px solid #cbd5e1',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'left'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginTop: '6px',
    borderRadius: '6px',
    border: '1px solid #cbd5e1',
    boxSizing: 'border-box',
    fontSize: '0.95em'
  };

  const errorTextStyle = {
    color: '#e74c3c',
    fontSize: '0.85em',
    marginTop: '4px',
    display: 'block',
    fontWeight: 'bold'
  };

  return (
    <div style={formBoxStyle}>
      <h2 style={{ color: '#2c3e50', textAlign: 'center', margin: '0 0 20px 0', borderBottom: '2px solid #3498db', paddingBottom: '10px' }}>
        Create Account Portal
      </h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold', color: '#34495e' }}>Full Name:</label>
          <input 
            type="text" 
            name="name"
            placeholder="Min 5 characters"
            value={formData.name}
            onChange={handleChange}
            style={{ ...inputStyle, borderColor: errors.name ? '#e74c3c' : '#cbd5e1' }}
          />
          {errors.name && <span style={errorTextStyle}>{errors.name}</span>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold', color: '#34495e' }}>Email Address:</label>
          <input 
            type="text" 
            name="email"
            placeholder="e.g. user@domain.com"
            value={formData.email}
            onChange={handleChange}
            style={{ ...inputStyle, borderColor: errors.email ? '#e74c3c' : '#cbd5e1' }}
          />
          {errors.email && <span style={errorTextStyle}>{errors.email}</span>}
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label style={{ fontWeight: 'bold', color: '#34495e' }}>Secure Password:</label>
          <input 
            type="password" 
            name="password"
            placeholder="Min 8 characters"
            value={formData.password}
            onChange={handleChange}
            style={{ ...inputStyle, borderColor: errors.password ? '#e74c3c' : '#cbd5e1' }}
          />
          {errors.password && <span style={errorTextStyle}>{errors.password}</span>}
        </div>

        <button 
          type="submit" 
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            fontSize: '1.05em',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}>
          Register Member
        </button>
      </form>
    </div>
  );
}

export default Register;