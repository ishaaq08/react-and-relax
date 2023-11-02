function Profile({ username, details, handleDeleteClick }) {
	return (
		<>
			<div className="bg-white p-8 rounded shadow-lg w-96 relative">
				<h1 className="text-2xl font-bold mb-6 text-center">Profile Page</h1>
				<div className="space-y-4">
					<p className="flex justify-between">
						<span className="font-medium">Username:</span>
						<span>{username}</span>
					</p>
					<p className="flex justify-between">
						<span className="font-medium">Email:</span>
						<span>{details.email}</span>
					</p>
					<p className="flex justify-between">
						<span className="font-medium">Created At:</span>
						<span>{details.date_registered}</span>
					</p>
					<p className="flex justify-between">
						<span className="font-medium">Total points:</span>
						<span>{details.points}</span>
					</p>
				</div>

				<div className="mt-6 flex justify-between">
					<button
						onClick={() => {}}
						className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
					>
						Update
					</button>
					<button
						onClick={handleDeleteClick}
						className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
					>
						Delete
					</button>
				</div>
			</div>
		</>
	)
}

export default Profile
