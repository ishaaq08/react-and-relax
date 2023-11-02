import { useEffect, useState } from "react"

function EditModal(props) {
	const handleCheckboxChange = (name) => {
		props.setCheckboxState((prevState) => ({
			...prevState,
			[name]: !prevState[name],
		}))
	}
	const [disabled, setDisabled] = useState(true)
	const [error, setError] = useState("")
	useEffect(() => {
		props.checkboxState.email ? "" : props.setEmail(""),
			props.checkboxState.password ? "" : props.setPassword(""),
			setError(""),
			props.setConfirmPassword("")
	}, [props.checkboxState])

	useEffect(() => {
		if (props.password === props.confirmPassword) {
			setDisabled(false)
			setError("")
		} else {
			setDisabled(true)
			setError("Passwords do not match")
		}
	}, [props.confirmPassword])
	const handleEmailChange = (e) => {
		props.setEmail(e.target.value)
	}
	const handlePasswordChange = (e) => {
		props.setPassword(e.target.value)
	}
	const handleConfirmPasswordChange = (e) => {
		props.setConfirmPassword(e.target.value)
	}

	return (
		<div className="p-4 bg-blue-700 text-center  rounded shadow-md w-96 ">
			<h2 className="text-xl mb-4">Edit Profile</h2>
			<form>
				<div className="flex items-center mb-4">
					<label htmlFor="email" className="w-1/3">
						Email
					</label>
					<input
						type="checkbox"
						className="mr-2"
						onChange={() => handleCheckboxChange("email")}
					/>
					<input
						type="text"
						name="email"
						id="email"
						value={props.email}
						onChange={handleEmailChange}
						disabled={!props.checkboxState.email}
						className="p-2 border rounded w-2/3"
					/>
				</div>

				<div className="flex items-center mb-4">
					<label htmlFor="password" className="w-1/3">
						Password
					</label>
					<input
						type="checkbox"
						className="mr-2"
						onChange={() => handleCheckboxChange("password")}
					/>
					<input
						type="password"
						name="password"
						id="password"
						value={props.password}
						onChange={handlePasswordChange}
						disabled={!props.checkboxState.password}
						className="p-2 border rounded w-2/3"
					/>
				</div>
				{props.checkboxState.password ? (
					<div className="flex items-center mb-4">
						<label htmlFor="confirmPassword" className="w-1/3">
							Confirm Password
						</label>
						<input
							type="password"
							name="confirmPassword"
							id="confirmPassword"
							value={props.confirmPassword}
							onChange={handleConfirmPasswordChange}
							disabled={!props.checkboxState.password}
							className="p-2 border rounded w-2/3"
						/>
					</div>
				) : (
					""
				)}
				{error ? <p className="text-red-500">{error}</p> : ""}

				<div className="flex justify-end space-x-2">
					<button
						type="submit"
						onClick={props.editSubmit}
						disabled={disabled}
						className="px-4 py-2 bg-green-600 text-white rounded hover:bg-blue-700"
					>
						Submit
					</button>

					<button
						onClick={props.closeModal}
						className="px-4 py-2 text-white bg-red-600 rounded hover:bg-gray-400"
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	)
}

export default EditModal
