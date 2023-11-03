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
		<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center  text-center bg-black bg-opacity-75">
			<div className="text-white p-8 rounded-t-lg shadow-lg w-[50vw] h-[40vh] xl:w-[30vw] items-center  justify-center relative bg-blue-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg  border-gray-100">
				<h2 className="text-xl font-bold mb-4">Edit Profile</h2>
				<form className="">
					<label htmlFor="email" className="block leading-6 text-lg my-2">
						Email
					</label>
					<div className="flex font-bold items-center mb-4">
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
							placeholder="Enter new email"
							className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>

					<label htmlFor="password" className="w-1/3 text-lg">
						Password
					</label>
					<div className="flex font-bold items-center mt-2">
						<input
							type="checkbox"
							className="mr-2"
							onChange={() => handleCheckboxChange("password")}
						/>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Enter new password"
							value={props.password}
							onChange={handlePasswordChange}
							disabled={!props.checkboxState.password}
							className="block w-full rounded-md border-0 py-1.5 mb-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
					{props.checkboxState.password ? (
						<>
							<label
								htmlFor="confirmPassword"
								className="w-1/3 text-lg text-center"
							>
								Confirm Password
							</label>
							<div className="flex font-bold items-center mb-4 mt-2">
								<input type="checkbox" className="opacity-0 mr-2" />
								<input
									type="password"
									name="confirmPassword"
									id="confirmPassword"
									value={props.confirmPassword}
									placeholder="Enter confirm password"
									onChange={handleConfirmPasswordChange}
									disabled={!props.checkboxState.password}
									className="block  rounded-md border-0 w-full mx-auto py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</>
					) : (
						""
					)}
					{error ? <p className="text-red-500">{error}</p> : ""}
					<div className="mt-6 flex justify-between absolute bottom-[1%] gap-2 mb-2 right-[35%] ">
						<button
							type="submit"
							onClick={props.editSubmit}
							disabled={disabled}
							className="px-4 py-2 bg-green-600 text-white rounded hover:bg-blue-700"
						>
							Submit
						</button>

						<button
							onClick={props.closeEditModal}
							className="px-4 py-2 text-white bg-red-600 rounded hover:bg-gray-400"
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default EditModal
