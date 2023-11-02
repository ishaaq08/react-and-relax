import { useEffect, useState } from "react"
import { useData } from "../../contexts"
import { Profile, DeleteModal, EditModal } from "../../components"
import { useNavigate } from "react-router-dom"

// import from "../../components"

import background5 from "../../assets/background5.svg"

const bgStyles = {
	backgroundImage: `url(${background5})`, // Use the 'url' function to specify the image path // Adjust to your preference
	backgroundSize: "cover",
	backgroundPosition: "center", // Adjust to your preference
	// backgroundRepeat: 'no-repeat',
	height: "100vh",
	// Set the desired height of your hero section
}

function ProfilePage() {
	const { username, token } = useData()
	const [details, setDetails] = useState({})
	const [showDeleteModal, setShowDeleteModal] = useState(false)
	const [showEditModal, setShowEditModal] = useState(false)
	const [checkboxState, setCheckboxState] = useState({
		email: false,
		password: false,
	})
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	const [error, setError] = useState("")

	useEffect(() => {
		getProfile(username, setDetails, token)
	}, [])

	const handleDeleteClick = () => {
		setShowDeleteModal(true)
	}

	const handleEditClick = () => {
		setShowEditModal(true)
	}

	const closeEditModal = () => {
		setShowEditModal(false)
	}
	const editSubmit = (e) => {
		e.preventDefault()
		console.log("editSubmit")
		const payload = {}

		if (checkboxState.email) payload.email = email
		if (checkboxState.password) payload.password = password

		// Send PATCH request with selected fields
		fetch(`https://react-and-relax.onrender.com/users/${username}`, {
			// Adjust the endpoint as needed
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				"Authorization": token,
			},
			body: JSON.stringify(payload),
		}).then((response) => {
			if (response.status === 200) {
				// If successful, hide the edit modal and maybe navigate away or show a success message
				setShowEditModal(false)
				getProfile(username, setDetails, token)
				setEmail("")
				setPassword("")
				setConfirmPassword("")
				setCheckboxState({
					email: false,
					password: false,
				})
			} else {
				// Handle errors, for instance show an error message
				console.error("Error editing the profile:", response)
			}
		})
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
		<div
			style={bgStyles}
			className="bg-[#023E8A] min-h-screen flex items-center flex-col justify-center"
		>
			<Profile
				username={username}
				details={details}
				handleDeleteClick={handleDeleteClick}
				handleEditClick={handleEditClick}
			/>
			{showDeleteModal && (
				<DeleteModal closeModal={closeModal} confirmDelete={confirmDelete} />
			)}

			{showEditModal && (
				<EditModal
					closeEditModal={closeEditModal}
					setEmail={setEmail}
					setPassword={setPassword}
					setConfirmPassword={setConfirmPassword}
					setCheckboxState={setCheckboxState}
					checkboxState={checkboxState}
					email={email}
					password={password}
					confirmPassword={confirmPassword}
					editSubmit={editSubmit}
				/>
			)}
		</div>
	)
}

export default ProfilePage

const getProfile = async (username, setDetails, token) => {
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
}

export { handleDeleteClick, handleEditClick, closeEditModal, editSubmit }
