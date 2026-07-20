import React from 'react';

function BookDetails() {
  const books = [
    { id: 'B1', title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann' },
    { id: 'B2', title: 'Clean Code', author: 'Robert C. Martin' }
  ];

  return (
    <div style={{ padding: '15px', backgroundColor: '#ebf5fb', borderRadius: '6px', border: '1px solid #a9cce3' }}>
      <h3 style={{ color: '#2980b9', margin: '0 0 10px 0' }}>📚 Engineering Library Shelf</h3>
      <ul>
        {books.map(book => (
          <li key={book.id} style={{ margin: '8px 0' }}>
            <strong>{book.title}</strong> — <span style={{ color: '#555' }}>{book.author}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;