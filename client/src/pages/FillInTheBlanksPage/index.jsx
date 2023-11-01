import { Footer, Timer } from '../../components';
import { useEffect, useState } from 'react';
import { useData } from '../../contexts';

const Index = () => {
  const { questions, setQuestions } = useData();
  const { session } = useData();

  const [currentQ, setCurrentQ] = useState([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [showIncorrectMessage, setShowIncorrectMessage] = useState(false);

  async function loadQuestions() {
    const response = await fetch(
      'https://react-and-relax.onrender.com/pyhton/easy'
    );
    const data = await response.json();
    setQuestions(data);
    setCurrentQ(data[currentQIndex]);
  }

  useEffect(() => {
    loadQuestions();
  }, []);

  useEffect(() => {
    setShowIncorrectMessage(false);
  }, [currentQ]);

  function handleCorrectAnswer(e) {
    e.preventDefault();
    if (e.target.classList.contains('true')) {
      setCurrentQIndex((prevIndex) => prevIndex + 1);
      setCurrentQ(questions[currentQIndex + 1]);
    } else {
      setShowIncorrectMessage(true);
    }
  }

  return (
    <div className="h-screen bg-[#023E8A]">
      <h1 className="capitalize text-white text-center text-5xl pt-10 font-semibold tracking-widest">
        Fill in the blanks
      </h1>
      <div className="timer max-w-[1000px] rounded-full flex mt-12 gap-5 justify-center items-center text-black bg-white w-[70vw] mx-auto px-4 py-7 text-lg">
        <h2 className="text-2xl tracking-widest">Time Remaining: </h2>
        <Timer />
      </div>

      {session % 2 !== 0 ? (
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
            <br />

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
            {showIncorrectMessage && <p>Incorrect answer. Please try again</p>}
          </div>
        </div>
      ) : (
        <h2>
          Well Done! Please have a rest and prepare yourself for the next set of
          questions!
        </h2>
      )}
    </div>
  );
};

export default Index;
