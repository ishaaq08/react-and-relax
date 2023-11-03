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
    setBreakLength(5);
    // setBreakLength(5*60) > change back
  }

  function handleClickLong(e) {
    e.preventDefault();
    setBreakLength(10);
    // setBreakLength(10*60) > change back
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
      <div className="flex justify-around items-center h-[15vh] mt-36 mb-36">
        {/* Grid One */}

        <div
          className="grid  grid-cols-2 gap-2 text-white grid-rows-3 justify-items-center h-full w-full bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10
"
        >
          <h2 className="text-2xl font-bold col-span-2 text-center pt-2">
            Select Rest Period
          </h2>
          <div className="row-span-2  h-full text-5xl flex justify-center flex-col items-center tracking-widest">
            <h2 className="text-xl font-bold mb-2">Time</h2>
            {/* {minutes.length == 1 ? `0${minutes}:00` : `${minutes}:00`} < ! RESET TO THIS AFTER DEMO*/}{' '}
            /{`${breakLength}s`}
          </div>

          <div className="flex mb-2 justify-center  items-center text-xl">
            <button className="tracking-widest" onClick={handleClickShort}>
              Short Break - (5 seconds)
            </button>
          </div>

          <div className=" flex  justify-center  items-center text-xl ">
            <button className="tracking-widest" onClick={handleClickLong}>
              Long Break - (10 seconds)
            </button>
          </div>
        </div>

        {/* Grid Two */}
        <div
          className="grid grid-cols-2 gap-2 text-white ml-4 grid-rows-3 justify-items-center h-full w-full bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10"
        >
          <h2 className="text-white text-2xl col-span-2 mb-2 font-bold mt-2">
            Select {howTo === 1 ? 'Topic &' : ''} Difficulty
          </h2>

          <div className="flex justify-center items-start mt-4 row-span-2  col-span-2 gap-2">
            {howTo === 1 && (
              <div className="flex col-span-2 row-span-2 justify-items-center">
                <div className="language ">
                  <select
                    className="bg-[#00B4D8] text-xl"
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
                className="bg-[#00B4D8] focus text-xl  px-4 py-2 text-white capitalize"
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
      </div>

      {/* Select Difficulty */}
    </div>
  );
}
