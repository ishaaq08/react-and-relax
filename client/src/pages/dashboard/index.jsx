import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background5 from '../../assets/background5.svg';
import { useData } from '../../contexts';

const bgStyles = {
  backgroundImage: `url(${background5})`, // Use the 'url' function to specify the image path // Adjust to your preference
  backgroundSize: 'cover',
  backgroundPosition: 'center', // Adjust to your preference
  // backgroundRepeat: 'no-repeat',
  height: '100vh',
  // Set the desired height of your hero section
};

function Dashboard() {
  const { username } = useData();
  const [userPoints, setUserPoints] = useState(150);
  const Navigate = useNavigate();
  const leaderboard = [
    { username: 'John Doe', score: 100 },
    { username: 'Jane Doe', score: 90 },
    { username: 'Alice', score: 80 },
    { username: 'Paul', score: 70 },
    { username: 'Barry', score: 30 },
    { username: 'Chuckle', score: 10 },
  ];

  const handlePlayButtonClick = () => {
    Navigate('/games/');

    console.log('Play button clicked');
  };

  return (
    <div
      style={bgStyles}
      className="dashboard p-8 bg-gray-100 min-h-screen relative opacity-90"
    >
      <div className="text-center mt-48 max-w-xl h-[50vh] flex justify-center bg-blue-900 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10  items-center flex-col mx-auto">
        <div className="absolute top-8 right-8 text-white flex items-center gap-2">
          Your Points:{' '}
          <span className="font-bold text-3xl text-white">{userPoints}</span>
        </div>
        <h1 className="text-2xl font-bold mb-4">
          Welcome, <span className="text-white">{username}</span>!
        </h1>
        <h2 className="text-xl font-semibold mb-3">Leaderboard</h2>
        <ul className="bg-transparent p-4 shadow-2xl text-white w-1/2 mx-auto ">
          {leaderboard.map((player, index) => (
            <li key={index} className="border-b last:border-0 py-2">
              <span className="font-medium">{player.username}</span>:{' '}
              {player.score} points
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center h-[100px]">
          <button
            onClick={handlePlayButtonClick}
            className=" py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 mr-3"
          >
            Play Games
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
