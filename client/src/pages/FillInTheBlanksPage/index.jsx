import { Timer } from "../../components"
import { useEffect, useState } from "react"
import { useData } from "../../contexts"

const index = () => {

  const {questions, setQuestions} = useData([])
  const [currentQ, setCurrentQ] = useState([])
  const [currentQIndex, setCurrentQIndex] = useState(0)

  // Fetching the data
  async function loadQuestions(){
    const response = await fetch("https://react-and-relax.onrender.com/fill_in_blanks")
    const data = await response.json()
    // const filteredData = data.filter(item => item.id === 19);
    setQuestions(data)
  }

  // Load questions
  useEffect(() => {
    loadQuestions()
    setCurrentQ(questions[currentQIndex])
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
        <h2>QUESTION</h2>
        <br></br>
        {/* <p>{questions[randNum(questions)]["question"]}</p> */}
        <p>{currentQ["question"]}</p>
    </>
        ) : (
    <p>Loading Data</p>
      )}

    <div className="answers">
        {questions.length !== 0 && (
          <>
            <h2>ANSWERS</h2>
            <br />
            {/* Accessed the array I want to map over which is in the 'answers property. 'answer'=object and we want the 'answer' value of that object */}
            {currentQ["answers"].map((answer, index) => (
              <button className="border-2 border-black ml-2 mr-2" key={index}>{answer["answer"]}</button>
            ))}
          </>
        )}
    </div>
      </div>
    </>
  )
}
export default index

// A fetch request is being made every second 