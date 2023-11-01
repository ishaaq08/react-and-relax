import { BeginGame, BreakDurationForm, SelectGrid } from '../../components';

const index = (breakLength, setBreakLength) => {
  return (
    <div className="bg-[#023E8A]">
      {/* <h1 className="text-5xl text-center font-semibold uppercase tracking-widest">
        Select A Game
      </h1> */}
      <SelectGrid />
      {/* <BreakDurationForm
        breakLength={breakLength}
        setBreakLength={setBreakLength}
      /> */}
      {/* <BeginGame breakLength={breakLength} setBreakLength={setBreakLength} /> */}
    </div>
  );
};
export default index;
