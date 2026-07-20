import React from 'react';
import EmployeeCard from './EmployeeCard';

// Step 7: Intermediate layout modified so theme name is not passed explicitly
function EmployeeList() {
  const staff = [
    { id: 'EMP101', name: 'Dev Vyawahare', role: 'Associate Data Scientist' },
    { id: 'EMP102', name: 'Vea Daswani', role: 'UI/UX Specialist' },
    { id: 'EMP103', name: 'Ananya Sharma', role: 'Cloud Infrastructure Architect' }
  ];

  return (
    <div style={{ marginTop: '20px' }}>
      <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>Active Workspace Roster</h3>
      {staff.map(emp => (
        <EmployeeCard 
          key={emp.id}
          id={emp.id}
          name={emp.name}
          role={emp.role}
        />
      ))}
    </div>
  );
}

export default EmployeeList;