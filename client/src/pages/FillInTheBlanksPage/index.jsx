import { Timer } from "../../components"
import { useEffect, useState } from "react"
import { useData } from "../../contexts"

const index = () => {

  const {questions, setQuestions} = useData([])
  const [currentQ, setCurrentQ] = useState([])
  const [currentQIndex, setCurrentQIndex] = useState(0)
  const [showIncorrectMessage, setShowIncorrectMessage] = useState(false)

  async function loadQuestions(){
    const response = await fetch("https://react-and-relax.onrender.com/fill_in_blanks")
    const data = await response.json()
    setQuestions(data) // Array
    setCurrentQ(data[currentQIndex]); // Object
  }

  useEffect(() => {
    loadQuestions()
  },[])

  useEffect(() => {
    setShowIncorrectMessage(false)
  }, [currentQ])

  function handleCorrectAnswer(e){
    e.preventDefault()
    if(e.target.classList.contains("true")){
      setCurrentQIndex((prevIndex) => prevIndex + 1);
      setCurrentQ(questions[currentQIndex + 1]);
    } else {
      setShowIncorrectMessage(true)
    }
  }

  return (
    <>
      <h1>Fill in the blanks game</h1>
      
      <br />

      <div className="timer">
        <h2>Countdown Timer: </h2>
        <Timer />
      </div>

      <br />

      <div className="questions">
        <h2>QUESTION</h2>
            <br></br>
        {currentQ ? (
          <>
            <p>{currentQ["question"]}</p>
            <br />
          </>
          ) : (
            <>
              <p>Loading Data</p>
              <br />
            </>
        )}
      </div>

    <div className="answers">
      <h2>ANSWERS</h2>
      <br />

        {currentQ ? (
          <>
            {Array.isArray(currentQ["answers"]) ? (
              currentQ["answers"].map((answer, index) => (
                <button className={`border-2 border-black ml-2 mr-2 ${answer["is_correct"]}`} key={index} onClick={handleCorrectAnswer}>{answer["answer"]}</button>
              ))
            ) : (
              <p>Answers not available</p>
            )}
          </>
        ) : ( 
          <p>Loading answers</p>
        )}
    </div>

    <div className="incorrect-answer-message">
      <br />
      <p>{showIncorrectMessage ? "Incorrect answer. Please try again" : null}</p>
    </div>
    
    </>
  )
}
export default index
