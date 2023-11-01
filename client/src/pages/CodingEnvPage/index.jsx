import {useState, useEffect} from 'react';
import { useData } from '../../contexts';


const index = () => {
  const { difficulty, questions, setQuestions} = useData()
  const [currentQ, setCurrentQ] = useState([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answer, setAnswer] = useState()
  const [showIncorrectMessage, setShowIncorrectMessage] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://react-and-relax.onrender.com/pseudocode/${difficulty}`);
      const data = await res.json();
      setQuestions(data) 
      setCurrentQ(data[currentQIndex])
    }

    getData();
  },[]);
  
  useEffect(() => {
    setShowIncorrectMessage(false);
  }, [currentQ]);

  function handleSubmit(e){
    e.preventDefault()
    if (answer == currentQ["answer"]){
      setCurrentQIndex((prevIndex) => prevIndex + 1)
      setCurrentQ(questions[currentQIndex + 1])
    } else {
      setShowIncorrectMessage(true)
      setTimeout(() => {
        setShowIncorrectMessage(false)
      }, 2000) 
    } 
    setAnswer("")
  }

  function handleChange(e){
    setAnswer(e.target.value)
  }
  
  console.log(answer);

  console.log("Correct answer :");
  console.log(currentQ["answer"]);

  return (
    <div>
      {/* Explanation of Task */}
      <div>
        <h2>Task</h2>
        <p>
        {currentQ ? (
            <>
              <p className="text-xl">{currentQ['question']}</p>
              <p className="text-xl">{currentQ['code']}</p>
            </>
            ) : (         
                <p>Loading Data</p>
            )}
        </p>
      </div>

      {/* Area to answer */}
      <div>
        <input type="text" onChange={handleChange} value={answer}/>
        <button type='submit' onClick={handleSubmit}>Submit</button>
      </div>
      <div className="incorrect-answer-message mt-5 text-2xl">
            {showIncorrectMessage && <p id="error-message">Incorrect answer. Please try again</p> }
      </div>
    </div>
  )
};
export default index;
