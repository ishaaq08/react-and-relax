import { useEffect, useState } from "react"
import { useData } from "../../contexts"
function ProfilePage() {
	const { username } = useData()
	const { token } = useData()
	const [details, setDetails] = useState({})
	useEffect(() => {
		// if (username) {
		// 	window.location.replace("/login")
		// }
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

	return (
		<div>
			<h1>Profile Page</h1>
			<p>Username: {username}</p>
			<p>Email: {details.email}</p>
			<p>Created At: {details.date_registered}</p>
			<p> Total points: {details.points}</p>
			<></>
		</div>
	)
}

export default ProfilePage
