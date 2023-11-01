import { useState, useContext, createContext } from "react"

const DataContext = createContext()

export const DataProvider = ({ children }) => {
	const [breakLength, setBreakLength] = useState(0)
	const [questions, setQuestions] = useState([])
	const [beginGameError, setBeginGameError] = useState(undefined)
	const [howTo, setHowTo] = useState(undefined)
	const [username, setUsername] = useState("")
	const [token, setToken] = useState("")
	// const [time, setTime] = useState(25*60)

	return (
		<DataContext.Provider
			value={{
				howTo,
				setHowTo,
				breakLength,
				setBreakLength,
				beginGameError,
				setBeginGameError,
				questions,
				setQuestions,
				username,
				setUsername,
				token,
				setToken,
			}}
		>
			{children}
		</DataContext.Provider>
	)
}

export const useData = () => useContext(DataContext)
