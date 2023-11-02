import {useState, useEffect} from 'react';
import { useData } from '../../contexts';
import { Timer } from '../../components';


const index = () => {
  const { difficulty, questions, setQuestions} = useData()
  const { session } = useData()
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


  return (
    <>

    {/*Timer  */}
    <h1 className="capitalize text-white text-center text-5xl pt-10 font-semibold tracking-widest">
          Pseudo Code Game
    </h1>
    <div className="timer max-w-[1000px] rounded-full flex mt-12 gap-5 justify-center items-center text-black bg-white w-[70vw] mx-auto px-4 py-7 text-lg">
      <h2 className="text-2xl tracking-widest">Time Remaining: </h2>
      <Timer />
    </div>

    { session % 2 != 0 ? 
    (
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
    :
    (
      <h2>
          Well Done! Please have a rest and prepare yourself for the next set of
          questions!
      </h2>
    )}
    </>
  )
};
export default index;
