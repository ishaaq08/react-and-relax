import { useData } from '../../contexts'

export default function index() {
  const {
    breakLength,
    setBreakLength,
    language,
    setLanguage,
    difficulty,
    setDifficulty,
  } = useData();

  function handleClickShort(e) {
    e.preventDefault();
    setBreakLength(5 * 60); 
  }

  function handleClickLong(e) {
    e.preventDefault();
    setBreakLength(10 * 60);
  }

  // Set Language

  function handleChangeLanguage(e) {
    setLanguage(e.target.value);
  }

  // Set difficulty

  function handleChangeDifficulty(e) {
    setDifficulty(e.target.value);
  }

  const minutes = breakLength/60 

  return (
    <div className="max-w-[1500px] mx-auto">
      <h2 className="text-white text-center mb-24 text-2xl my-4 font-bold tracking-widest">
        Select Rest Period
      </h2>
      <div className="grid mb-24 max-w-[1000px] mx-auto grid-cols-2 gap-2 text-white bg-[#023E8A] grid-rows-2 ">
        <div className="row-span-2 h-full text-5xl flex justify-center flex-col items-center tracking-widest">
          <h2 className="text-xl font-bold mb-2">Time</h2>
          {minutes.length == 1
            ? `0${minutes}:00`
            : `${minutes}:00`}
        </div>

        <div className="flex mb-2 justify-center  items-center text-xl">
          <button className="tracking-widest" onClick={handleClickShort}>
            Short Break - (5 minutes)
          </button>
        </div>

        <div className=" flex  justify-center  items-center text-xl ">
          <button className="tracking-widest" onClick={handleClickLong}>
            Long Break - (10 minutes)
          </button>
        </div>
      </div>
      {/* Select Difficulty */}
      <div className="bg-[#023E8A] flex gap-2 pt-20 flex-col  justify-center items-center">
        <h2 className="text-white text-2xl my-4 font-bold tracking-widest">
          Select Difficulty
        </h2>
        <div className="flex ">
          <div className="language ">
            <select onChange={handleChangeLanguage}>
              <option value="python">python</option>
              <option value="html">html</option>
            </select>
          </div>
          <div className="difficulty">
            {/* Recommended event handler for handling changes in a select tag is to use onChange{} */}
            <select onChange={handleChangeDifficulty}>
              <option value="easy">easy</option>
              <option value="medium">medium</option>
            </select>
          </div>{' '}
        </div>
      </div>
    </div>
  );
}
