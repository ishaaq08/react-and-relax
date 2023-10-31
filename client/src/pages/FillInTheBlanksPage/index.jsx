import { Timer } from "../../components"
import { useEffect, useState } from "react"
import { useData } from "../../contexts"

const index = () => {

  const {questions, setQuestions} = useData([])
  const [currentQ, setCurrentQ] = useState([])
  const [currentQIndex, setCurrentQIndex] = useState(0)

  async function loadQuestions(){
    const response = await fetch("https://react-and-relax.onrender.com/fill_in_blanks")
    const data = await response.json()
    setQuestions(data) // Array
    setCurrentQ(data[currentQIndex]); // Object
  }

  useEffect(() => {
    loadQuestions()
  },[])

  function handleCorrectAnswer(){
    setCurrentQIndex((prevIndex) => prevIndex + 1);
    setCurrentQ(questions[currentQIndex + 1]);
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
                <button className="border-2 border-black ml-2 mr-2" key={index} onClick={handleCorrectAnswer}>{answer["answer"]}</button>
              ))
            ) : (
              <p>Answers not available</p>
            )}
          </>
        ) : (
          <p>Loading answers</p>
        )}
    </div>

    <div className="submit-answers">

    </div>
    
    </>
  )
}
export default index
