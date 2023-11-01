import React, { useState } from "react"
import { SignUpForm } from "../../components"

export default function index() {
	const [userName, setUserName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	const [errorMessage, setErrorMessage] = useState("")

	return (
		<>
			<SignUpForm
				userName={userName}
				setUserName={setUserName}
				email={email}
				setEmail={setEmail}
				password={password}
				setPassword={setPassword}
				confirmPassword={confirmPassword}
				setConfirmPassword={setConfirmPassword}
				setErrorMessage={setErrorMessage}
				errorMessage={errorMessage}
			/>
		</>
	)
}
