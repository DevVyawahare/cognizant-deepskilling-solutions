import React, { Component } from 'react';

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      person: null,
      error: null
    };
  }

  // Asynchronous lifecycle hook method invoked immediately after mounting
  async componentDidMount() {
    const url = "https://randomuser.me/api/";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP Error Status: ${response.status}`);
      }
      const data = await response.json();
      
      // Extract the first result object from the incoming array payload
      this.setState({ person: data.results[0], loading: false });
    } catch (err) {
      console.error("API Call Failure:", err);
      this.setState({ error: err.message, loading: false });
    }
  }

  render() {
    const { loading, person, error } = this.state;

    const cardStyle = {
      maxWidth: '350px',
      margin: '30px auto',
      padding: '25px',
      border: '1px solid #cbd5e1',
      borderRadius: '12px',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    };

    // Conditional render boundary: Display loading layout state
    if (loading) {
      return (
        <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '1.2em', color: '#7f8c8d' }}>
          🔄 Querying secure REST API endpoint...
        </div>
      );
    }

    // Conditional render boundary: Display connection failure error state
    if (error) {
      return (
        <div style={{ textAlign: 'center', marginTop: '40px', color: '#e74c3c', fontWeight: 'bold' }}>
          ❌ Network Error: {error}
        </div>
      );
    }

    return (
      <div style={cardStyle}>
        <h3 style={{ color: '#2c3e50', margin: '0 0 15px 0', borderBottom: '2px solid #3498db', paddingBottom: '8px' }}>
          User Profile Verified
        </h3>
        
        {/* Render User Avatar Photo via Attribute Mapping */}
        <img 
          src={person.picture.large} 
          alt="User Profile" 
          style={{
            borderRadius: '50%',
            width: '120px',
            height: '120px',
            border: '3px solid #3498db',
            marginBottom: '15px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
          }}
        />

        {/* Display Title, First Name, and Last Name via Object parsing */}
        <div style={{ fontSize: '1.25em', fontWeight: 'bold', color: '#2c3e50', textTransform: 'capitalize' }}>
          {person.name.title}. {person.name.first} {person.name.last}
        </div>
        
        <p style={{ color: '#7f8c8d', fontSize: '0.9em', margin: '8px 0 15px 0' }}>
          ✉️ {person.email}
        </p>
        
        <button 
          onClick={() => window.location.reload()}
          style={{
            padding: '8px 16px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
          Fetch Next User
        </button>
      </div>
    );
  }
}

export default Getuser;