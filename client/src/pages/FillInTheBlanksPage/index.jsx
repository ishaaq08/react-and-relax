import { Timer } from "../../components"
import { useEffect } from "react"
import { useData } from "../../contexts"

const index = () => {

  const {questions, setQuestions} = useData([])

  // Fetching the data
  async function loadQuestions(){
    const response = await fetch("https://react-and-relax.onrender.com/fill_in_blanks")
    const data = await response.json()
    setQuestions(data)
  }

  
  // Load questions
  useEffect(() => {
    loadQuestions()
  },[])

  // Random number generator
  function randNum(array){
    return Math.floor(Math.random()*array.length)
  }

  return (
    <>
      <h1>Fill in the blanks game</h1><br />
      <div>
        <h2>Countdown Timer: </h2>
        <Timer />
      </div>
      <br />
      <div className="questions">
      {questions.length !== 0 ? (
    <>
        <p>Question 1: {questions[0]["question"]}</p>
        <p>Question 2: {questions[1]["question"]}</p>
        <p>Question 3: {questions[2]["question"]}</p>
    </>
        ) : (
    <p>Loading Data</p>
      )}
      </div>
    </>
  )
}
export default index

// A fetch request is being made every second 