import { useNavigate } from "react-router-dom"
import { useData } from "../../contexts"

function Logout() {
	const Navigate = useNavigate()
	const { setToken } = useData()
	const { setUsername } = useData()
	setToken("")
	setUsername("")
	Navigate("/")
}

export default Logout
