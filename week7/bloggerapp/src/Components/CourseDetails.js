import React from 'react';

function CourseDetails() {
  const courses = [
    { id: 'C1', name: 'AWS Certified Solutions Architect (SAA-C03)', duration: '27 hours' },
    { id: 'C2', name: 'Mastering Advanced Data Structures & Algorithms', duration: '45 hours' }
  ];

  return (
    <div style={{ padding: '15px', backgroundColor: '#e8f8f5', borderRadius: '6px', border: '1px solid #a3e4d7' }}>
      <h3 style={{ color: '#16a085', margin: '0 0 10px 0' }}>🎓 Deepskilling Certification Tracks</h3>
      <ul>
        {courses.map(course => (
          <li key={course.id} style={{ margin: '8px 0' }}>
            <strong>{course.name}</strong> — <span style={{ color: '#7f8c8d' }}>{course.duration}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;