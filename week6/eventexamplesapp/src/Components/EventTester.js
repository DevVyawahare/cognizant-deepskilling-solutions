import React, { Component } from 'react';

class EventTester extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  // 1a. Method to increment the counter value
  incrementCounter = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  // 1b. Method to say hello followed by a static message
  sayHello = () => {
    console.log("Hello! Visitor tracking is active.");
  };

  // 1. Unified trigger method to invoke multiple methods on a single click
  handleIncreaseClick = () => {
    this.incrementCounter();
    this.sayHello();
  };

  // Method to decrement the counter value
  handleDecrementClick = () => {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  };

  // 2. Method that takes an argument passed explicitly from the button call
  sayWelcome = (message) => {
    alert(`System Message: ${message.toUpperCase()} to our application portal!`);
  };

  // 3. Method executing the synthetic event handler tracking target values
  handleSyntheticPress = (e) => {
    // Accessing the synthetic event properties
    console.log("Synthetic Event Details:", e);
    alert(`Synthetic Event triggered! Event Type: ${e.type}. Message: I was clicked.`);
  };

  render() {
    const cardStyle = {
      border: '1px solid #dcdde1',
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: '#ffffff',
      maxWidth: '500px',
      margin: '20px auto',
      textAlign: 'left',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
    };

    const buttonStyle = {
      padding: '8px 16px',
      margin: '5px',
      cursor: 'pointer',
      borderRadius: '4px',
      border: '1px solid #34495e',
      fontWeight: 'bold'
    };

    return (
      <div style={cardStyle}>
        <h3 style={{ color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '8px', marginTop: '0' }}>
          Part 1: Interaction & Synthetic Event Handlers
        </h3>
        
        <p>Current Live Counter Status: <strong style={{ fontSize: '1.2em', color: '#2980b9' }}>{this.state.counter}</strong></p>
        
        {/* Invoke multiple methods sequentially on click */}
        <button style={{ ...buttonStyle, backgroundColor: '#2ecc71', color: 'white' }} onClick={this.handleIncreaseClick}>
          Increment (Multi-Call)
        </button>
        
        <button style={{ ...buttonStyle, backgroundColor: '#e74c3c', color: 'white' }} onClick={this.handleDecrementClick}>
          Decrement
        </button>
        
        <hr style={{ margin: '15px 0', borderColor: '#f1f2f6' }} />
        
        {/* Invokes message with customized string argument bindings */}
        <button style={{ ...buttonStyle, backgroundColor: '#f1c40f', color: '#2c3e50' }} onClick={() => this.sayWelcome('welcome')}>
          Say Welcome
        </button>

        {/* Captures React cross-browser Synthetic Events wrapper output */}
        <button style={{ ...buttonStyle, backgroundColor: '#9b59b6', color: 'white' }} onClick={this.handleSyntheticPress}>
          Trigger OnPress (Synthetic)
        </button>
      </div>
    );
  }
}

export default EventTester;