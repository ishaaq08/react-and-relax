import { Footer, Timer, ExitButton } from '../../components';
import { useEffect, useState } from 'react';
import { useData } from '../../contexts';

const Index = () => {
  const { questions, setQuestions, language, difficulty } = useData();
  const { session } = useData()
  const [currentQ, setCurrentQ] = useState([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [showMessage, setShowMessage] = useState(undefined)

  useEffect(() => {
    async function loadQuestions() {
      try{
      const response = await fetch(`https://react-and-relax.onrender.com/${language}/${difficulty}`);

      if(!response.ok){
        throw new Error(`Error: ${response.status}`)
      }

      const data = await response.json();
      setQuestions(data);
      setCurrentQ(data[currentQIndex]);
      } catch(error){
        console.error("Error fetching questions: ", error)
      }
    }
    loadQuestions()
  }, []);

  useEffect(() => {
    setShowMessage(undefined)
  }, [currentQ]);

  function handleCorrectAnswer(e) {
    e.preventDefault();
    if (e.target.classList.contains('true')) {
      setShowMessage("correct")
      setTimeout(()=> {
        setCurrentQIndex((prevIndex) => prevIndex + 1);
        setCurrentQ(questions[currentQIndex + 1]);
      },1500)

    } else {
      setShowMessage("incorrect");
      setTimeout(() => {
        setShowMessage(undefined)
      }, 1500)
    }
  }

  return (

  <div className="h-screen bg-[#023E8A]">
     
    {/* Header */}
    <div className="header">
      <h1 className="capitalize text-white text-center text-5xl pt-10 font-semibold tracking-widest">
        Fill in the blanks
      </h1>
    </div>


    {/* Timer */}
      <div className="timer max-w-[1000px] rounded-full flex mt-12 gap-5 justify-center items-center text-black bg-white w-[70vw] mx-auto px-4 py-7 text-lg">
        <h2 className="text-2xl tracking-widest">Time Remaining: </h2>
        <Timer />
      </div>

    {/* Display the Task during Work Periods */}
      {session % 2 !== 0 ? 
      (
        <div className="session rounded-2xl flex flex-col justify-center items-center bg-[#023E8A] w-[90vw] mx-auto px-40 py-28 text-white">
          <div className="questions flex justify-center items-center flex-col mb-12">
            {currentQ ? (
              <p className="text-xl">{currentQ['question']}</p>
            ) : (
              <>
                <p>Loading Data</p>
                <br />
              </>
            )}
          </div>

          <div className="answers flex justify-center  items-center flex-col">
            {currentQ ? (
              <div className="flex flex-col  gap-2">
                {Array.isArray(currentQ['answers']) ? (
                  currentQ['answers'].map((answer, index) => (
                    <button
                      className={`border-2 w-80 rounded-full h-20 p-4 border-white hover:text-[#023E8A] hover:bg-white text-xl transition-all ml-2 mr-2 ${answer['is_correct']}`}
                      key={index}
                      onClick={handleCorrectAnswer}
                    >
                      {answer['answer']}
                    </button>
                  ))
                ) : (
                  <p>Answers not available</p>
                )}
              </div>
            ) : (
              <p>Loading answers</p>
            )}
          </div>

          <div className="incorrect-answer-message mt-5 text-2xl">
          {showMessage === "incorrect" && showMessage ? <p className='text-red-500 font-semibold'>Incorrect Answer</p> : (showMessage === "correct" && showMessage ? <p className='text-green-500 font-semibold'>Correct</p> : <></>)}
          </div>
        </div>
      ) 
      : 
      (
        <div className='flex justify-center items-center text-3xl tracking-widest mt-12 mb-5 text-white'>
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
  );
};

export default Index;
// ishaaq