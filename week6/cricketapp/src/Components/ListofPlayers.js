import React from 'react';

function ListofPlayers() {
  // 11-player dataset with names and scores
  const players = [
    { name: 'Rohit Sharma', score: 85 },
    { name: 'Shubman Gill', score: 45 },
    { name: 'Virat Kohli', score: 112 },
    { name: 'Shreyas Iyer', score: 68 },
    { name: 'KL Rahul', score: 75 },
    { name: 'Hardik Pandya', score: 32 },
    { name: 'Ravindra Jadeja', score: 90 },
    { name: 'R. Ashwin', score: 28 },
    { name: 'Jasprit Bumrah', score: 12 },
    { name: 'Mohammed Shami', score: 72 },
    { name: 'Mohammed Siraj', score: 5 }
  ];

  // Filtering players with scores >= 70 using an ES6 arrow function
  const highScorers = players.filter(player => player.score >= 70);

  const containerStyle = {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'left',
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '10px' }}>
        List of Indian Cricket Players
      </h2>
      <h3>All Registered Players (ES6 Map)</h3>
      <ul>
        {players.map((player, index) => (
          <li key={index}><strong>{player.name}</strong> — Score: {player.score}</li>
        ))}
      </ul>

      <h3 style={{ marginTop: '30px', color: '#d35400' }}>High Scorers (Score ≥ 70 via ES6 Filter/Arrow)</h3>
      <table border="1" cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>Player Name</th>
            <th>Runs Scored</th>
          </tr>
        </thead>
        <tbody>
          {highScorers.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td style={{ fontWeight: 'bold', color: '#27ae60' }}>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListofPlayers;