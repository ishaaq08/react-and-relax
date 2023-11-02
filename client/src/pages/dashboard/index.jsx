import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background5 from '../../assets/background5.svg';

const bgStyles = {
  backgroundImage: `url(${background5})`, // Use the 'url' function to specify the image path // Adjust to your preference
  backgroundSize: 'cover',
  backgroundPosition: 'center', // Adjust to your preference
  // backgroundRepeat: 'no-repeat',
  height: '100vh',
  // Set the desired height of your hero section
};

function Dashboard() {
  const [username, setUsername] = useState('JohnDoe');
  const [userPoints, setUserPoints] = useState(150);
  const Navigate = useNavigate();
  const leaderboard = [
    { username: 'JohnDoe', score: 100 },
    { username: 'JaneDoe', score: 90 },
    { username: 'Alice', score: 80 },
    { username: 'Alice', score: 80 },
    { username: 'Alice', score: 80 },
  ];

  const handlePlayButtonClick = () => {
    Navigate('/games/how-to-play/fill-in-the-blanks');

    console.log('Play button clicked');
  };

  const handleFillInTheBlanksClick = () => {
    console.log('Fill in the Blanks button clicked');
  };

  return (
    <div
      style={bgStyles}
      className="dashboard p-8 bg-gray-100 min-h-screen relative opacity-90"
    >
      

      <div className="text-center mt-36 max-w-xl h-[50vh] flex justify-center bg-blue-900 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-slate-100 items-center flex-col mx-auto">
				<div className="absolute top-8 right-8 text-white">
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
        <div className='flex justify-center items-center h-[100px]'>
          <button
            onClick={handlePlayButtonClick}
            className=" py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 mr-3"
          >
            Play Game
          </button>
          <button
            onClick={handleFillInTheBlanksClick}
            className=" py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
          >
            Fill in the Blanks
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
