import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

function SignUpForm({
	userName,
	setUserName,
	email,
	setEmail,
	password,
	setPassword,
	confirmPassword,
	setConfirmPassword,
	errorMessage,
	setErrorMessage,
}) {
	const [passwordsMatch, setPasswordsMatch] = useState(true)
	console.log(passwordsMatch)
	const Navigate = useNavigate()
	useEffect(() => {
		if (password !== confirmPassword) {
			setErrorMessage("Passwords do not match")
			setPasswordsMatch(false)
		} else {
			setErrorMessage("")
			setPasswordsMatch(true)
		}
	}, [confirmPassword])

	function handleUsernameChange(event) {
		setUserName(event.target.value)
	}
	function handleEmailChange(event) {
		setEmail(event.target.value)
	}
	function handlePasswordChange(event) {
		setPassword(event.target.value)
	}
	function handleConfirmPasswordChange(event) {
		setConfirmPassword(event.target.value)
		// if (password !== confirmPassword) {
		//   setErrorMessage('Passwords do not match');
		//   setPasswordsMatch(false);
		// } else {
		//   setErrorMessage('');
		//   setPasswordsMatch(true);
		// }
	}
	function handleSubmit(event) {
		event.preventDefault()

		fetch("https://react-and-relax.onrender.com/users/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: userName,
				email: email,
				password: password,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.error) {
					setErrorMessage(data.error)
				} else {
					console.log(data)
					Navigate("/login")
				}
			})
			.catch((err) => {
				setErrorMessage(err)
			})
	}

	return (
		<>
			{/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
			<div className="flex min-h-screen bg-[#023E8A] text-white flex-1 flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm border border-gray-300 rounded p-4 mt-12">
    
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
      Sign-Up
    </h2>
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Email */}
      <div>
        <label className="block text-sm font-medium leading-6">Email address</label>
        <div className="mt-2">
          <input
            onChange={handleEmailChange}
            type="email"
            id="email-input"
            placeholder="Email"
            required
            className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      {/* Username */}
      <div>
        <label className="block text-sm font-medium leading-6">Username</label>
        <div className="mt-2">
          <input
            onChange={handleUsernameChange}
            type="username"
            id="username-input"
            placeholder="Username"
            required
            className="block w-full rounded-md border-0 py-1.5 pl-2 pr-4 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium leading-6">Password</label>
        <div className="mt-2">
          <input
            onChange={handlePasswordChange}
            type="password"
            id="password-input"
            placeholder="Password"
            required
            className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      {/* Confirm Password */}
      <div>
        <label className="block text-sm font-medium leading-6">Confirm Password</label>
        <div className="mt-2">
          <input
            onChange={handleConfirmPasswordChange}
            type="password"
            id="confirm-password-input"
            placeholder="Password"
            required
            className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          disabled={!passwordsMatch}
        >
          Sign Up
        </button>
      </div>

      <div className="mx-auto">{errorMessage}</div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Not a member?{" "}
      <a
        href="#"
        className="font-semibold leading-6 text-blue-500 hover:text-indigo-500"
      >
        Start a 14 day free trial
      </a>
    </p>
  </div>
</div>

		</>
	)
}

export default SignUpForm
