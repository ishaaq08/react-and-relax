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
      try {
        const response = await fetch(`https://react-and-relax.onrender.com/${language}/${difficulty}`);

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }

        const data = await response.json();
        setQuestions(data);
        setCurrentQ(data[currentQIndex]);
      } catch (error) {
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
      setTimeout(() => {
        setCurrentQIndex((prevIndex) => prevIndex + 1);
        setCurrentQ(questions[currentQIndex + 1]);
      }, 1500)
    } else {
      setShowMessage("incorrect");
      setTimeout(() => {
        setShowMessage(undefined)
      }, 1500)
    }
  }
  return (
  <div className="h-screen bg-[#023E8A]">
    <h1 className="capitalize text-white text-center text-5xl pt-36 font-semibold tracking-widest mt-12">
      Fill in the blanks
    </h1>
    <div className="board bg-white w-[45vw] mx-auto p-6 rounded-lg mt-6">
      {/* Timer */}
<div className="timer-container bg-gray-200 p-0 border-2 border-black rounded-lg mt-2">
        <div className="timer w-[500px] flex gap-6 justify-center items-center text-black w-[30vw] mx-auto px-10 py-5">
          <h2 className="text-2xl tracking-widest" style={{ fontSize: '24px', fontWeight: 'bold' }}>Time Remaining:</h2>
          <Timer />
        </div>
      </div>

      {/* Display the Task during Work Periods */}
      {session % 2 !== 0 ? (
        <div className="session bg-white p-4 rounded-2xl mt-6">
          <div className="questions-container bg-white p-4 rounded mb-6">
            <div className="questions flex justify-center items-center flex-col">
              {currentQ ? (
                <p className="text-xl">{currentQ['question']}</p>
              ) : (
                <>
                  <p>Loading Data</p>
                  <br />
                </>
              )}
            </div>
          </div>

          <div className="answers-container bg-white p-4 rounded mt-6">
            <div className="answers flex justify-center items-center flex-col">
              {currentQ ? (
                <div className="flex flex-col gap-2">
                  {Array.isArray(currentQ['answers']) ? (
                    currentQ['answers'].map((answer, index) => (
                      <button
                        className={`border-2 w-80 rounded-full h-20 p-4 border-black bg-white text-gray-900 hover:bg-gray-100 hover:text-gray-500 text-xl transition-all ml-2 mr-2 ${answer['is_correct']}`}
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
          </div>

          <div className="incorrect-answer-message mt-6 flex items-center justify-center">
  {showMessage === "incorrect" && showMessage ? (
    <p className="text-red-500 font-semibold text-center">Incorrect Answer</p>
  ) : showMessage === "correct" && showMessage ? (
    <p className="text-green-500 font-semibold text-center">Correct</p>
  ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <div className="session bg-white p-4 rounded-2xl mt-6">
          <h2>
            Well Done! Please have a rest and prepare yourself for the next set of
            questions!
          </h2>
        </div>
      )}
    </div>
    <div className="exit-btn mt-6">
      <ExitButton />
    </div>
  </div>
);
  
};

export default Index;
