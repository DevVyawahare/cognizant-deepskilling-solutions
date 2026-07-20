import React from 'react';

function BlogDetails() {
  const blogs = [
    { id: 'BL1', topic: 'Demystifying React Virtual DOM Reconciliations', reads: '12.4K' },
    { id: 'BL2', topic: 'Microservices Architecture Design Patterns', reads: '8.9K' }
  ];

  return (
    <div style={{ padding: '15px', backgroundColor: '#fdf2e9', borderRadius: '6px', border: '1px solid #f5cba7' }}>
      <h3 style={{ color: '#d35400', margin: '0 0 10px 0' }}>✍️ Technical Blog Feed</h3>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id} style={{ margin: '8px 0' }}>
            <strong>{blog.topic}</strong> — <span style={{ color: '#27ae60', fontWeight: 'bold' }}>{blog.reads} views</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;