import { Footer } from '..';
import { useData } from '../../contexts';

export default function index() {
  const {
    breakLength,
    setBreakLength,
    language,
    setLanguage,
    difficulty,
    setDifficulty,
    howTo,
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

  const minutes = breakLength / 60;

  return (
    <div className="max-w-[1500px] mx-auto">
      {/* <h2 className="text-white text-center mb-24 text-2xl my-4 font-bold tracking-widest">
        Select Rest Period
      </h2> */}
      <div className="flex justify-around items-center mt-36 mb-36">
        {/* Grid One */}

        <div className="grid  grid-cols-2 gap-2 text-white bg-[#023E8A] grid-rows-3 place-content-center content-center justify-items-center">
          <h2 className="text-2xl font-bold col-span-2 text-center">
            Select Rest Period
          </h2>
          <div className="row-span-2  h-full text-5xl flex justify-center flex-col items-center tracking-widest">
            <h2 className="text-xl font-bold mb-2">Time</h2>
            {minutes.length == 1 ? `0${minutes}:00` : `${minutes}:00`}
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

        {/* Grid Two */}
        <div className="grid w-7/12 grid-cols-2 gap-2 text-white bg-[#023E8A] grid-rows-3 place-content-center content-center justify-items-center">
          <h2 className="text-white text-2xl col-span-2 mb-2 font-bold tracking-widest">
            Select {howTo === 1 ? 'Topic &' : ''} Difficulty
          </h2>

          {howTo === 1 && (
            <div className="flex col-span-2 row-span-2 justify-items-center">
              <div className="language ">
                <select
                  className="bg-indigo-600 text-xl"
                  onChange={handleChangeLanguage}
                >
                  <option value="python">python</option>
                  <option value="html">html</option>
                </select>
              </div>
            </div>
          )}

          <div className="difficulty col-span-2 row-span-2 ">
            <select
              className="bg-[#023E8A] outline-[#023E8A] text-xl   px-4 py-2 text-white capitalize"
              onChange={handleChangeDifficulty}
            >
              <option className="p-8" value="easy">
                easy
              </option>
              <option className="p-8" value="medium">
                medium
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* Select Difficulty */}
    </div>
  );
}
