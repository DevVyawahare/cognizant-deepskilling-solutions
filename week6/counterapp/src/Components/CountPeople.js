import React, { Component } from 'react';

class CountPeople extends Component {
  constructor(props) {
    super(props);
    // State layout to track metrics internally
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
  }

  // Increments entry counter parameter when visitor arrives
  updateEntry = () => {
    this.setState((prevState) => ({
      entrycount: prevState.entrycount + 1
    }));
  };

  // Increments exit counter parameter when visitor leaves
  updateExit = () => {
    this.setState((prevState) => ({
      exitcount: prevState.exitcount + 1
    }));
  };

  render() {
    return (
      <div style={{
        maxWidth: '450px',
        margin: '30px auto',
        padding: '25px',
        border: '2px solid #2c3e50',
        borderRadius: '12px',
        backgroundColor: '#fdfefe',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #2980b9', paddingBottom: '10px' }}>
          Visitor Traffic Dashboard
        </h2>
        
        <div style={{ margin: '25px 0', fontSize: '1.2em', textAlign: 'left', paddingLeft: '20%' }}>
          <p>Total Entered: <strong style={{ color: '#27ae60' }}>{this.state.entrycount}</strong></p>
          <p>Total Exited: <strong style={{ color: '#c0392b' }}>{this.state.exitcount}</strong></p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
          <button 
            onClick={this.updateEntry}
            style={{
              padding: '10px 25px',
              fontSize: '1em',
              fontWeight: 'bold',
              backgroundColor: '#27ae60',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}>
            Login
          </button>
          
          <button 
            onClick={this.updateExit}
            style={{
              padding: '10px 25px',
              fontSize: '1em',
              fontWeight: 'bold',
              backgroundColor: '#c0392b',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}>
            Exit
          </button>
        </div>
      </div>
    );
  }
}

export default CountPeople;