function DeleteModal({ closeModal, confirmDelete }) {
	return (
		<>
			<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
				<div className="bg-white p-5 rounded shadow-md">
					<p className="mb-4">Are you sure you want to delete?</p>
					<div className="flex justify-end space-x-4">
						<button
							onClick={closeModal}
							className="px-4 py-2 text-gray-600 hover:text-gray-900"
						>
							Cancel
						</button>
						<button
							onClick={confirmDelete}
							className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
						>
							Confirm
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default DeleteModal
