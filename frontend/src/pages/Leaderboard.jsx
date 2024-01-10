// Leaderboard.jsx
import React from 'react';
import '../Scss/Leaderboard.scss';
import goldmedal from "../image/goldmedal.png"
import silvermedal from "../image/silvermedal.png"
import bronzemedal from "../image/bronzemedal.png"
import award from "../image/award.png"

const Leaderboard = () => {
  // Mock data (replace this with actual data fetching)
  const leaderboardData = [
    { rank: 1, name: 'John Doe', speed: 50, accuracy: 95 },
    { rank: 2, name: 'Jane Smith', speed: 45, accuracy: 92 },
    { rank: 3, name: 'Bob Johnson', speed: 42, accuracy: 90 },
    // Add more data as needed
    { rank: 4, name: 'Alice Johnson', speed: 41, accuracy: 88 },
    { rank: 5, name: 'Charlie Brown', speed: 40, accuracy: 87 },
    { rank: 6, name: 'David Johnson', speed: 39, accuracy: 86 },
    { rank: 7, name: 'Emma Smith', speed: 38, accuracy: 85 },
    { rank: 8, name: 'Frank White', speed: 37, accuracy: 84 },
    { rank: 9, name: 'Grace Lee', speed: 36, accuracy: 83 },
    { rank: 10, name: 'Henry Davis', speed: 35, accuracy: 82 },
  ];

  return (
    <div className="leaderboard-upper-container">
    <div className="leaderboard-container">
      <div className="text-center table-div">Leaderboard</div>
      <table className="table">
        <thead className="table-heading">
          <tr>
            <th scope="col">Rank</th>
            <th className="name" scope="col">Name</th>
            <th scope="col">Speed (WPM)</th>
            <th scope="col">Accuracy (%)</th>
            
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((leader) => (
            <tr className="row-table" key={leader.rank}>
            
              <td className="leaderboard">{leader.rank <= 3 ? renderMedal(leader.rank) : leader.rank}</td>
              <td className="name">{leader.name}</td>
              <td>{leader.speed}</td>
              <td>{leader.accuracy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

// Function to render medal based on rank
const renderMedal = (rank) => {
  switch (rank) {
    case 1:
      return <img src={goldmedal} alt="Gold Medal" className="medal" />;
    case 2:
      return <img src={silvermedal} alt="Silver Medal" className="medal" />;
    case 3:
      return <img src={bronzemedal} alt="Bronze Medal" className="medal" />;
    default:
      return null;
  }
};

export default Leaderboard;
