import { useData } from '../../contexts';

export default function index() {
  const { breakLength, setBreakLength } = useData();

  function handleClickShort(e) {
    e.preventDefault();
    setBreakLength(5);
  }

  function handleClickLong(e) {
    e.preventDefault();
    setBreakLength(10);
  }

  return (
    <>
    
      <div className="grid grid-cols-2 text-white bg-[#023E8A] grid-rows-2 h-[50vh]">
        
        <div className="row-span-2 h-full text-8xl flex justify-center items-center tracking-widest">
          {breakLength.toString().length == 1
            ? `0${breakLength}:00`
            : `${breakLength}:00`}
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
