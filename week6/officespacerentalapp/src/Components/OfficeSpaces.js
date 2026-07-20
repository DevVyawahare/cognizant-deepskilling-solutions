import React from 'react';

function OfficeSpaces() {
  // A collection list of office objects featuring names, prices, and locations
  const officeList = [
    { id: 1, name: 'Premium Executive Hub', rent: 85000, address: 'Plot 45, Hitech City, Hyderabad', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=300&q=80' },
    { id: 2, name: 'Co-Working Lite Lounge', rent: 48000, address: 'Building B, Sector 62, Noida', image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=300&q=80' },
    { id: 3, name: 'Enterprise Corporate Suite', rent: 125000, address: 'Level 11, MG Road, Bangalore', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=300&q=80' },
    { id: 4, name: 'Startup Shared Desk Space', rent: 55000, address: 'Chambers Road, Bandra Kurla Complex, Mumbai', image: 'https://images.unsplash.com/photo-1556761175-b814d58f32ef?auto=format&fit=crop&w=300&q=80' }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #16a085', paddingBottom: '10px', textAlign: 'center' }}>
        Available Office Spaces for Rent
      </h2>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '25px', marginTop: '20px' }}>
        {officeList.map((office) => {
          // Dynamic Inline CSS Condition Evaluation: Rent below 60,000 = Red | Above = Green
          const rentStyle = {
            fontWeight: 'bold',
            fontSize: '1.2em',
            color: office.rent < 60000 ? '#e74c3c' : '#27ae60'
          };

          return (
            <div key={office.id} style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              width: '300px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              backgroundColor: '#fff',
              textAlign: 'left'
            }}>
              {/* JSX Attribute Mapping for dynamic image sourcing */}
              <img 
                src={office.image} 
                alt={office.name} 
                style={{ width: '100%', height: '180px', objectFit: 'cover' }}
              />
              
              <div style={{ padding: '15px' }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>{office.name}</h3>
                <p style={{ margin: '5px 0', color: '#555' }}><strong>Location:</strong> {office.address}</p>
                
                {/* Dynamic color text render insertion */}
                <p style={{ margin: '15px 0 0 0' }}>
                  Monthly Rent: <span style={rentStyle}>₹{office.rent.toLocaleString()}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OfficeSpaces;