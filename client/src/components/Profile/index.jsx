function Profile({ username, details, handleDeleteClick, handleEditClick }) {
	return (
		<>
			<div className="bg-white p-8 rounded shadow-lg w-96 relative">
				<h1 className="text-2xl font-bold mb-6 text-center">Profile Page</h1>
				<div className="space-y-4">
					<p className="flex justify-between">
						<span className=" font-bold">Username:</span>
						<span className="font-medium">{username}</span>
					</p>
					<p className="flex justify-between">
						<span className="font-bold">Email:</span>
						<span className="font-medium">{details.email}</span>
					</p>
					<p className="flex justify-between">
						<span className="font-bold">Created At:</span>
						<span className="font-medium">{details.date_registered}</span>
					</p>
					<p className="flex justify-between">
						<span className="font-bold">Total points:</span>
						<span className="font-medium">{details.points}</span>
					</p>
				</div>

				<div className="mt-6 flex justify-between">
					<button
						onClick={handleEditClick}
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
