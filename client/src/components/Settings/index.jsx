import { useData } from '../../contexts'

export default function index() {
  const { breakLength, setBreakLength, language, setLanguage, difficulty, setDifficulty } = useData();

  function handleClickShort(e) {
    e.preventDefault();
    setBreakLength(5*60);
  }

  function handleClickLong(e) {
    e.preventDefault();
    setBreakLength(10*60);
  }

  // Set Language

  function handleChangeLanguage(e){
    setLanguage(e.target.value)

  }

  // Set difficulty

  function handleChangeDifficulty(e){
    setDifficulty(e.target.value)
  }

  console.log(language);
  console.log(difficulty);

  return (
    <>
    
      <div className="grid grid-cols-2 text-white bg-[#023E8A] grid-rows-2 h-[50vh]">
        
        <div className="row-span-2 h-full text-8xl flex justify-center items-center tracking-widest">
          {breakLength.toString().length == 1
            ? `0${breakLength}:00`
            : `${breakLength}:00`}
        </div>

        <div className="language">
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
        </div>

        <div className=" flex justify-center items-center text-5xl">
          <button className="tracking-widest" onClick={handleClickShort}>
            Short Break
          </button>
        </div>

        <div className=" flex justify-center items-center text-5xl ">
          <button className="tracking-widest" onClick={handleClickLong}>
            Long Break
          </button>
        </div>

      </div>

    </>
  );
}
