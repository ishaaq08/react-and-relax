import { Header } from ".."
import { useState } from "react"
import { useData } from "../../contexts"

const index = () => {
	const [userName, setUserName] = useState("")
	const [password, setPassword] = useState("")
	const [errorMessage, setErrorMessage] = useState("")
	const { token, setToken } = useData()
	const { username, setUsername } = useData()

	function handleUsernameChange(event) {
		setUserName(event.target.value)
	}
	function handlePasswordChange(event) {
		setPassword(event.target.value)
	}
	function handleSubmit(event) {
		event.preventDefault()
		fetch("https://react-and-relax.onrender.com/users/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: userName,
				password: password,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.error) {
					setErrorMessage(data.error)
				} else {
					setToken(data.token)
					setUsername(userName)
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
			<div className="flex min-h-screen  bg-[#023E8A] text-white flex-1 flex-col justify-center  px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm ">
					<img
						className="mx-auto h-10 w-auto"
						src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
						alt="Your Company"
					/>
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
						Sign in to your account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" onSubmit={handleSubmit}>
						<div>
							<label
								htmlFor="username"
								className="block text-sm font-medium leading-6 "
							>
								Username
							</label>
							<div className="mt-2">
								<input
									onChange={handleUsernameChange}
									id="username"
									name="username"
									type="username"
									autoComplete="username"
									required
									className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 "
								>
									Password
								</label>
								<div className="text-sm">
									<a
										href="#"
										className="font-semibold text-indigo-600 hover:text-indigo-500"
									>
										Forgot password?
									</a>
								</div>
							</div>
							<div className="mt-2">
								<input
									onChange={handlePasswordChange}
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-[#023d8a] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Sign in
							</button>
						</div>
					</form>

					<p className="mt-10 text-center text-sm text-gray-500">
						Not a member?{" "}
						<a
							href="#"
							className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
						>
							Start a 14 day free trial
						</a>
					</p>
				</div>
			</div>
		</>
	)
}
export default index
