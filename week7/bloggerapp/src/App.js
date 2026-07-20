import React, { useState } from 'react';
import './App.css';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails';

function App() {
  const [activeTab, setActiveTab] = useState('books');
  const [showQuickSummary, setShowQuickSummary] = useState(false);

  // --- APPROACH 1: Element Variables via standard statement evaluation ---
  let secondaryDisplayElement;
  if (activeTab === 'books') {
    secondaryDisplayElement = <p style={{ color: '#2980b9' }}>ℹ️ Displaying matching library books catalog items.</p>;
  } else if (activeTab === 'blogs') {
    secondaryDisplayElement = <p style={{ color: '#d35400' }}>ℹ️ Reviewing published engineering logs metrics feed.</p>;
  } else {
    secondaryDisplayElement = <p style={{ color: '#16a085' }}>ℹ️ Reviewing technical cohort academy syllabus models.</p>;
  }

  const btnStyle = (type) => ({
    padding: '10px 20px',
    margin: '0 5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    border: '1px solid #bdc3c7',
    borderRadius: '4px',
    backgroundColor: activeTab === type ? '#34495e' : '#fff',
    color: activeTab === type ? '#fff' : '#34495e'
  });

  return (
    <div className="App" style={{ maxWidth: '750px', margin: '30px auto', padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
      <h2 style={{ textAlign: 'center', color: '#2c3e50' }}>Cognizant Resource Analytics Hub</h2>
      <hr />

      {/* Navigation Layout Controls */}
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <button onClick={() => setActiveTab('books')} style={btnStyle('books')}>Book Catalog</button>
        <button onClick={() => setActiveTab('blogs')} style={btnStyle('blogs')}>Blog Posts</button>
        <button onClick={() => setActiveTab('courses')} style={btnStyle('courses')}>Academy Courses</button>
      </div>

      {/* Render Element Variable helper string */}
      {secondaryDisplayElement}

      <div style={{ margin: '20px 0' }}>
        {/* --- APPROACH 2: Ternary Operator Choice Selection --- */}
        {activeTab === 'books' ? (
          <BookDetails />
        ) : activeTab === 'blogs' ? (
          <BlogDetails />
        ) : (
          <CourseDetails />
        )}
      </div>

      <hr style={{ borderColor: '#eee', margin: '30px 0' }} />
      
      {/* Utility configuration to show conditional short-circuits */}
      <div style={{ textAlign: 'center' }}>
        <button 
          onClick={() => setShowQuickSummary(!showQuickSummary)}
          style={{ padding: '8px 15px', backgroundColor: '#95a5a6', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          {showQuickSummary ? 'Hide Meta Details' : 'Show Meta Details'}
        </button>
        
        {/* --- APPROACH 3: Logical AND (&&) Short-Circuit Rendering --- */}
        {showQuickSummary && (
          <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#f4f6f7', border: '1px dashed #bdc3c7', borderRadius: '4px' }}>
            <small>Data Source: Local Mock State Engines • Active Component ID Reference Mapping Set: True</small>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;