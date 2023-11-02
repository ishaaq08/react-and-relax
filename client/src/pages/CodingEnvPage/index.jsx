import {useState, useEffect} from 'react';
import { useData } from '../../contexts';
import { Timer, ExitButton } from '../../components';


const index = () => {
  const { difficulty, questions, setQuestions} = useData()
  const { session } = useData()
  const [currentQ, setCurrentQ] = useState([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answer, setAnswer] = useState("")

  // const [showIncorrectMessage, setShowIncorrectMessage] = useState(false);
  const [showMessage, setShowMessage] = useState(undefined)

  console.log(showMessage);

	useEffect(() => {
		const getData = async () => {
			const res = await fetch(
				`https://react-and-relax.onrender.com/pseudocode/${difficulty}`
			)
			const data = await res.json()
			setQuestions(data)
			setCurrentQ(data[currentQIndex])
		}

		getData()
	}, [])

	useEffect(() => {
		// setShowIncorrectMessage(false)
    setShowMessage(undefined)
	}, [currentQ])

  function handleSubmit(e){
    e.preventDefault()
    if (answer === currentQ["answer"]){

      setShowMessage("correct")

      setTimeout(() => {
        setCurrentQIndex((prevIndex) => prevIndex + 1)
        setCurrentQ(questions[currentQIndex + 1])
      }, 1500);
      
    } else {
      setShowMessage("incorrect")
      setTimeout(() => {
        setShowMessage(undefined)
      }, 1500) 
    } 
    setAnswer("")
  }

  function handleChange(e){
    setAnswer(e.target.value)
  }


  return (

    <div className="h-screen bg-[#023E8A]">

      {/* Header  */}
      <div className="header">
        <h1 className="capitalize text-white text-center text-5xl pt-10 font-semibold tracking-widest">
              Pseudo Code Game
        </h1>
      </div>

      {/* Timer  */}
      <div className="timer max-w-[1000px] rounded-full flex mt-12 gap-5 justify-center items-center text-black bg-white w-[70vw] mx-auto px-4 py-7 text-lg">
        <h2 className="text-2xl tracking-widest">Time Remaining: </h2>
        <Timer />
      </div>

    {/* Display the Task during Work Periods */}
      { session % 2 != 0 ? 
      (
        <div className="session rounded-2xl flex flex-col justify-center items-center bg-[#023E8A] w-[90vw] mx-auto px-40 py-28 text-white">

          {/* Explanation of Task */}
          <div className="questions flex justify-center items-center flex-col mb-12">

            {currentQ ? (
                <>
                  <p className="text-xl mb-4">{currentQ['question']}</p>
                  <p className="text-xl mb-4">{currentQ['code']}</p>
                </>
                )
                :
                (         
                  <p>Loading Data</p>
                )}
          

                {/* Area to answer */}
                <div className="flex flex-col items-center mt-4 mb-4">
                  <input className="text-black border-2 border-black mb-10 rounded-full w-80 h-18" type="text" placeholder='Input answer here' onChange={handleChange} value={answer} required/>
                  <button className="border-2 w-80 rounded-full h-20 p-4 border-white hover:text-[#023E8A] hover:bg-white text-xl transition-all" type='submit' onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
          
              {/* Incorrect Answer Message */}
              <div className="incorrect-answer-message mt-5 text-2xl">
                    {/* {showIncorrectMessage && <p className='text-red-500 font-semibold'>Incorrect answer. Please try again</p> } */}
                    {showMessage === "incorrect" && showMessage ? <p className='text-red-500 font-semibold'>Incorrect Answer</p> : (showMessage === "correct" && showMessage ? <p className='text-green-500 font-semibold'>Correct</p> : <></>)}

              </div>

          </div>
          </div>
      )
      :
      // Hide the task during rest periods
      ( 
      <div className='flex justify-center items-center text-3xl tracking-widest mt-12'>
        <h2>
            Well Done! Please have a rest and prepare yourself for the next set of
            questions!
        </h2>
      </div>
      )}

    {/* Exit Button */}
    <div className="exit-btn">
      <ExitButton />
    </div>


    </div>
  )
};
export default index;
