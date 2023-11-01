import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function Dashboard() {
	const [username, setUsername] = useState("JohnDoe")
	const [userPoints, setUserPoints] = useState(150)
	const Navigate = useNavigate()
	const leaderboard = [
		{ username: "JohnDoe", score: 100 },
		{ username: "JaneDoe", score: 90 },
		{ username: "Alice", score: 80 },
	]

	const handlePlayButtonClick = () => {
		Navigate("/games/how-to-play/fill-in-the-blanks")

		console.log("Play button clicked")
	}

	const handleFillInTheBlanksClick = () => {
		console.log("Fill in the Blanks button clicked")
	}

	return (
		<div className="dashboard p-8 bg-gray-100 min-h-screen mt-20 relative">
			<div className="absolute top-8 right-8 text-gray-700">
				Your Points:{" "}
				<span className="font-bold text-blue-500">{userPoints}</span>
			</div>

			<div className="text-center max-w-xl mx-auto">
				<h1 className="text-2xl font-bold mb-4">
					Welcome, <span className="text-blue-500">{username}</span>!
				</h1>
				<h2 className="text-xl font-semibold mb-3">Leaderboard</h2>
				<ul className="bg-white p-4 rounded shadow-lg w-1/2 mx-auto">
					{leaderboard.map((player, index) => (
						<li key={index} className="border-b last:border-0 py-2">
							<span className="font-medium">{player.username}</span>:{" "}
							{player.score} points
						</li>
					))}
				</ul>
				<button
					onClick={handlePlayButtonClick}
					className="mt-5 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 mr-3"
				>
					Play Game
				</button>
				<button
					onClick={handleFillInTheBlanksClick}
					className="mt-5 py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
				>
					Fill in the Blanks
				</button>
			</div>
		</div>
	)
}

export default Dashboard
