import { useEffect, useState } from "react"
import { useData } from "../../contexts"
import { Profile, DeleteModal } from "../../components"
// import EditModal from "../../components"

function ProfilePage() {
	const { username, token } = useData()
	const [details, setDetails] = useState({})
	const [showDeleteModal, setShowDeleteModal] = useState(false)
	const [showEditModal, setShowEditModal] = useState(false)

	useEffect(() => {
		fetch(`https://react-and-relax.onrender.com/users/${username}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": token,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data)
				setDetails(data)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])

	const handleDeleteClick = () => {
		setShowDeleteModal(true)
	}

	const confirmDelete = async () => {
		try {
			const response = await fetch(
				`https://react-and-relax.onrender.com/users/${username}`,
				{
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						"Authorization": token,
					},
				}
			)

			const data = await response.json()
			console.log(data)

			// If successful, hide the delete modal and maybe navigate away or show a success message
			setShowDeleteModal(false)
		} catch (error) {
			// Handle errors, for instance show an error message
			console.error("Error deleting the profile:", error)
		}
	}

	const closeModal = () => {
		setShowDeleteModal(false)
	}

	return (
		<div className="bg-gray-100 min-h-screen flex items-center justify-center">
			<Profile
				username={username}
				details={details}
				handleDeleteClick={handleDeleteClick}
			/>
			{showDeleteModal && (
				<DeleteModal closeModal={closeModal} confirmDelete={confirmDelete} />
			)}

			{/* {showEditModal && <EditModal />} */}
		</div>
	)
}

export default ProfilePage
