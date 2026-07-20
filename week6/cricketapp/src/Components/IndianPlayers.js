import React from 'react';

function IndianPlayers() {
  // Base core lineup array
  const coreLineup = ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6'];

  // a. Extract Odd and Even players using ES6 Destructuring features
  const [first, second, third, fourth, fifth, sixth] = coreLineup;
  const oddTeam = [first, third, fifth];
  const evenTeam = [second, fourth, sixth];

  // b. Declare two rosters and combine them using the ES6 Spread/Merge feature
  const T20players = ['Suryakumar Yadav', 'Rinku Singh', 'Yashasvi Jaiswal'];
  const RanjiTrophyPlayers = ['Sarfaraz Khan', 'Abhimanyu Easwaran', 'Sai Sudharsan'];
  const mergedRoster = [...T20players, ...RanjiTrophyPlayers];

  const styleBox = {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'left',
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <div style={styleBox}>
      <h2 style={{ color: '#27ae60', borderBottom: '2px solid #2ecc71', paddingBottom: '10px' }}>
        Roster Optimization Strategy
      </h2>

      <h3>Destructured Lineup Breakdown</h3>
      <p><strong>Odd Post Position Players:</strong> {oddTeam.join(', ')}</p>
      <p><strong>Even Post Position Players:</strong> {evenTeam.join(', ')}</p>

      <h3 style={{ marginTop: '30px' }}>Combined Match Squad (ES6 Spread operator Merge)</h3>
      <ol>
        {mergedRoster.map((player, index) => (
          <li key={index} style={{ padding: '4px 0', fontSize: '1.05em' }}>{player}</li>
        ))}
      </ol>
    </div>
  );
}

export default IndianPlayers;